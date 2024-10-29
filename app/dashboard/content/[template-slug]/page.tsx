'use client';

import React from 'react';
import FormSection from './_components/FormSection';
import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';


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
    const GenarateAIContent =(formData:any) => {

    }
    return (
        <div className='p-10'>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* FormSection */}
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => console.log(v)} />
                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
