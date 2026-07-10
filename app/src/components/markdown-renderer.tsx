import type { ReactNode } from 'react';

type MarkdownRendererProps = {
  markdown: string;
};

const footerPattern = /^\*Researched and written/i;
const orderedListPattern = /^\d+\.\s+/;

const splitMarkdownBlocks = (markdown: string) => {
  const lines = markdown
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter((line) => line.trim() !== '---' && !footerPattern.test(line.trim()));

  const blocks: string[] = [];
  let currentBlock: string[] = [];

  for (const line of lines) {
    if (line.trim() === '') {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      continue;
    }

    currentBlock.push(line);
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  return blocks;
};

const renderInline = (text: string): ReactNode[] => {
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match = pattern.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={`${match.index}-${match[0]}`}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {renderInline(match[2])}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(<strong key={`${match.index}-${match[0]}`}>{renderInline(match[4])}</strong>);
    } else if (match[5]) {
      nodes.push(<em key={`${match.index}-${match[0]}`}>{renderInline(match[5])}</em>);
    }

    lastIndex = match.index + match[0].length;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderBlock = (block: string, index: number) => {
  const trimmedBlock = block.trim();

  if (trimmedBlock.startsWith('# ')) {
    return null;
  }

  if (trimmedBlock.startsWith('## ')) {
    return <h2 key={index}>{renderInline(trimmedBlock.slice(3).trim())}</h2>;
  }

  if (trimmedBlock.startsWith('### ')) {
    return <h3 key={index}>{renderInline(trimmedBlock.slice(4).trim())}</h3>;
  }

  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);

  if (lines.length > 0 && lines.every((line) => line.startsWith('- '))) {
    return (
      <ul key={index}>
        {lines.map((line) => (
          <li key={line}>{renderInline(line.slice(2).trim())}</li>
        ))}
      </ul>
    );
  }

  if (lines.length > 0 && lines.every((line) => orderedListPattern.test(line))) {
    return (
      <ol key={index}>
        {lines.map((line) => (
          <li key={line}>{renderInline(line.replace(orderedListPattern, '').trim())}</li>
        ))}
      </ol>
    );
  }

  return <p key={index}>{renderInline(lines.join(' '))}</p>;
};

export const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  const blocks = splitMarkdownBlocks(markdown);

  return <>{blocks.map(renderBlock)}</>;
};
