import React, { memo, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import useCopyToClipboardPackage from 'react-use/lib/useCopyToClipboard';

import { IconButton, useToast } from '@chakra-ui/react';

import { getDefault } from '../utils';

const useCopyToClipboard = getDefault(useCopyToClipboardPackage);

export const CopyToClipboard = memo(({ value }: { value: string }) => {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<string | undefined>();
  const toast = useToast();

  return (
    <IconButton
      aria-label="Copy to clipboard"
      position="absolute"
      top="0"
      right="0"
      icon={copied ? <TiTickOutline /> : <MdContentCopy />}
      title="Copy to clipboard"
      onClick={() => {
        copy(value);

        setCopied(value);
        toast({
          status: 'info',
          title: `Copied to clipboard!`,
          position: 'bottom',
          duration: 1000,
        });

        setTimeout(() => {
          setCopied(undefined);
        }, 1000);
      }}
    />
  );
});
