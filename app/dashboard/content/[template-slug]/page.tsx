'use client';

import React, { useState } from 'react';
import FormSection from './_components/FormSection';
import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { fchown } from 'fs';
import { useUser } from '@clerk/nextjs';
import moment from'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/router';



interface PROPS {
    params: {
        'template-slug': string;
    }
}

function CreateNewContent(props: PROPS) {
    // Descompactar params usando React.use()
    const templateSlug = React.use(props.params)['template-slug'];

    // Busca o template com base no slug
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === templateSlug);
    const [loading,setLoading]=useState(false);
    const[aiOutput,setAiOutput]=useState<string>('');
    const {user}=useUser();
    const router=useRouter();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

    const GenarateAIContent=async(formData:any) => {
        if(totalUsage>=10000){
            
            console.log("Please make a Upgrade!")
            router.push('/dashboard/billing')
            return ;
        }
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;

        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
        
        const result = await chatSession.sendMessage(FinalAIPrompt);

        setAiOutput(result?.response.text())
        await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
        setLoading(false);
    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string) => {
        const result=await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createBy:user?.primaryEmailAddress?.emailAddress,
            createAt:moment().format('DD/MM/yyyy'),
        });
        
        console.log(result);
    }
    return (
        <div className='p-10'>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* FormSection */}
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenarateAIContent(v)}
                loading={loading}/>
                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
