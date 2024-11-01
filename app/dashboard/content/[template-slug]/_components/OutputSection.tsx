import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/Button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>();

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    if (aiOutput) {
      navigator.clipboard.writeText(aiOutput)
        .then(() => {
          console.log('Copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    } else {
      console.warn('No content to copy');
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => {
          const markdown = editorRef.current.getInstance().getMarkdown();
          console.log(markdown);
        }}
      />
    </div>
  );
}

export default OutputSection;
