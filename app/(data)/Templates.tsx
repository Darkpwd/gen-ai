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
        aiprompts: [
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
        aiprompts: [
            { prompt: 'What is your blog niche?', type: 'input' },
            { prompt: 'What key sections do you want in your blog content?', type: 'textarea' }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topic ideas based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt: 'Generate top 5 Blog Topic in bullet point only, with description based on niche in rich text editor format',
        slug: 'generate-blog-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ],
        aiprompts: [
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
        aiprompts: [
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
        ],
        aiprompts: [
            { prompt: 'What details should be included in the description?', type: 'textarea' },
            { prompt: 'What call-to-action do you want to include?', type: 'input' }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool that generates hashtags for YouTube videos based on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11513/11513415.png',
        aiPrompt: 'Provide relevant hashtags for your YouTube video based on the given niche & outline.',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Enter Keywords for your YouTube video',
                field: 'textarea',
                name: 'videoDescription',
                required: true
            },
            {
                label: 'Who is your target audience?',
                field: 'input',
                name: 'targetAudience',
            },
            
        ],
        aiprompts: [
            { prompt: 'Please provide me with the outline of your YouTube video! I need to know what the video is about to generate relevant hashtags.', type: 'textarea' },
            { prompt: 'What is the specific topic of your video?', type: 'input' },
            { prompt: 'Who is your target audience?', type: 'input' },
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
                label: 'Add emojis in your text',
                field: 'input',
                name: 'niche',
                required: true
            },
        ],
        aiprompts: [
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
        aiprompts: [
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
        slug: 'generate-text-improver',
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
                required: false
            }
        ],
        aiprompts: [
            { prompt: 'What article do you want to rewrite?', type: 'textarea' },
            { prompt: 'What style or tone do you want for the rewritten article?', type: 'input' }
        ]
    },
    {
        name: 'Instagram Post Hashtag Generator',
        desc: 'Enhance your Instagram posts with our AI-powered tool! Generate captivating captions and smart hashtag suggestions effortlessly. Perfect for businesses, influencers, and anyone looking to elevate their social media presence.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Generate relevant hashtags for your Instagram post based on the provided keywords and post type.',
        slug: 'generate-instagram-post',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },
            
            
        ],
        aiprompts: [
            { prompt: 'Please provide keywords for your Instagram post!', type: 'input' },
            { prompt: 'What type of post is it (e.g., photo, video, story)?', type: 'input' },
            { prompt: 'What is the main theme or topic of your post?', type: 'input' }
        ]
    }
    ,
]
