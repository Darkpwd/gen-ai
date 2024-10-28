import { icons } from "lucide-react";

export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2799/2799954.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche & outline and provide the result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input', 
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea', 
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What is your blog niche?', type: 'input' },
            { prompt: 'What are the main points you want to cover?', type: 'textarea' }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates blog content based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Generate comprehensive blog content based on the given niche & outline',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What is your blog niche?', type: 'input' },
            { prompt: 'What key sections do you want in your blog content?', type: 'textarea' }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topic ideas based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt: 'Provide 5 blog topic ideas based on the given niche & outline',
        slug: 'generate-blog-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What niche are you focusing on for your blog ideas?', type: 'input' },
            { prompt: 'What topics are related to your niche?', type: 'textarea' }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that generates SEO-friendly titles for YouTube videos based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompt: 'Create SEO-friendly titles for YouTube based on the given niche & outline',
        slug: 'generate-seo-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What is the main focus of your YouTube video?', type: 'input' },
            { prompt: 'What keywords do you want to include in the title?', type: 'textarea' }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool that generates descriptions for YouTube videos based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/15647/15647797.png',
        aiPrompt: 'Generate an engaging YouTube video description based on the given niche & outline',
        slug: 'generate-youtube-description',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What details should be included in the description?', type: 'textarea' },
            { prompt: 'What call-to-action do you want to include?', type: 'input' }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool that generates tags for YouTube videos based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11513/11513415.png',
        aiPrompt: 'Provide relevant tags for your YouTube video based on the given niche & outline',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What keywords should be used as tags?', type: 'input' },
            { prompt: 'What topics are covered in your video?', type: 'textarea' }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that adds emojis to your text based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/10851/10851330.png',
        aiPrompt: 'Enhance your text with relevant emojis based on the given content',
        slug: 'generate-emojis-to-text',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What text do you want to add emojis to?', type: 'textarea' },
            { prompt: 'What theme do you want the emojis to match?', type: 'input' }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool that rewrites your articles to be plagiarism-free based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170170.png',
        aiPrompt: 'Rewrite the provided article to make it plagiarism-free',
        slug: 'generate-rewrite-article',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What article do you want to rewrite?', type: 'textarea' },
            { prompt: 'What style or tone do you want for the rewritten article?', type: 'input' }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Text Improver is an AI tool that rewrites your articles into unique, plagiarism-free content. Based on your blog information, it enhances clarity and originality while preserving your voice, making content creation effortless and engaging.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/17982/17982304.png',
        aiPrompt: 'Rewrite the provided text to ensure it is plagiarism-free, maintaining the original meaning and enhancing clarity.',
        slug: 'genarate-text-improver',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What article do you want to rewrite?', type: 'textarea' },
            { prompt: 'What style or tone do you want for the rewritten article?', type: 'input' }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Transform your Instagram game with our AI-powered tool! Generate captivating captions, stunning visuals, and smart hashtag suggestions effortlessly. Perfect for businesses, influencers, and anyone looking to enhance their social media presence',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Create an engaging Instagram post, including a catchy caption and relevant hashtags, based on the provided theme or topic.',
        slug: 'generate-post',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ],
        aiprmopts: [
            { prompt: 'What article do you want to rewrite?', type: 'textarea' },
            { prompt: 'What style or tone do you want for the rewritten article?', type: 'input' }
        ]
    }
];
