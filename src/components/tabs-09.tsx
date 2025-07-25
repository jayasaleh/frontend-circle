import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy } from 'lucide-react';

const tabs = [
  {
    name: 'pnpm',
    value: 'pnpm',
    content: 'pnpm dlx shadcn@latest add tabs',
    count: 9,
  },
  {
    name: 'npm',
    value: 'npm',
    content: 'npx shadcn@latest add tabs',
  },
  {
    name: 'yarn',
    value: 'yarn',
    content: 'npx shadcn@latest add tabs',
    count: 3,
  },
  {
    name: 'bun',
    value: 'bun',
    content: 'bunx --bun shadcn@latest add tabs',
  },
];

export default function TabsWithBadgeDemo() {
  return (
    <Tabs defaultValue={tabs[0].value} className="max-w-xs w-full">
      <TabsList className="w-full p-0 bg-background justify-start border-b rounded-none gap-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-none bg-background h-full data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            <code className="text-[13px]">{tab.name}</code>{' '}
            {!!tab.count && (
              <Badge
                variant="secondary"
                className="ml-2 px-1 py-0 text-xs rounded-full"
              >
                {tab.count}
              </Badge>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="h-10 flex items-center justify-between border gap-2 rounded-md pl-3 pr-1.5">
            <code className="text-[13px]">{tab.content}</code>
            <Button size="icon" variant="secondary" className="h-7 w-7">
              <Copy className="!h-3.5 !w-3.5" />
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
