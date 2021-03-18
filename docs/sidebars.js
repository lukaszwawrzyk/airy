module.exports = {
  docs: [
    {
      '🚀 Getting Started': [
        'getting-started/introduction',
        'getting-started/components',
        {
          Installation: [
            'getting-started/installation/introduction',
            'getting-started/installation/vagrant',
            'getting-started/installation/production',
            'getting-started/installation/configuration',
          ],
        },
        {
          'Command Line Interface': ['cli/installation', 'cli/reference'],
        },
        'getting-started/quickstart',
        'getting-started/troubleshooting',
        'getting-started/glossary',
      ],
    },
    {
      '💬 Sources': [
        'sources/introduction',
        {
          'Airy Live Chat Plugin': [
            'sources/chatplugin/overview',
            'sources/chatplugin/demo',
            'sources/chatplugin/quickstart',
            'sources/chatplugin/installation',
            'sources/chatplugin/customization',
          ],
        },
        'sources/facebook',
        'sources/google',
        'sources/sms-twilio',
        'sources/whatsapp-twilio',
      ],
    },
    {
      '🔌 API': [
        'api/introduction',
        'api/authentication',
        {
          'HTTP Endpoints': [
            'api/endpoints/introduction',
            'api/endpoints/channels',
            'api/endpoints/chatplugin',
            'api/endpoints/conversations',
            'api/endpoints/messages',
            'api/endpoints/metadata',
            'api/endpoints/tags',
            'api/endpoints/templates',
            'api/endpoints/users',
          ],
        },
        'api/websocket',
        'api/webhook',
      ],
    },
    {
      '💎 UI': ['apps/ui/introduction', 'apps/ui/quickstart', 'apps/ui/inbox', 'apps/ui/tags', 'apps/ui/components'],
    },
    {
      '🛠️ Integrations': [
        {
          'Conversational AI /NLP': ['integrations/rasa'],
        },
      ],
    },
    {
      '⚙️ Concepts': [
        'concepts/architecture',
        'concepts/design-principles',
        'concepts/release-process',
        'concepts/kafka',
      ],
    },
    {
      '📚 Guides': ['guides/contributing'],
    },
    'changelog',
  ],
};
