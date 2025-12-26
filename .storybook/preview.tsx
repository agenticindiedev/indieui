import type { Preview } from '@storybook/react-vite';
import React from 'react';
import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff',
        },

        dark: {
          name: 'dark',
          value: '#0f172a',
        },
      },
    },
  },

  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background text-foreground p-8">
        <Story />
      </div>
    ),
  ],

  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },
};

export default preview;
