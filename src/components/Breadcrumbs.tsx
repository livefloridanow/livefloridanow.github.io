import Link from 'next/link';
import SchemaOrg, { getBreadcrumbSchema } from './SchemaOrg';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = getBreadcrumbSchema(items);

  return (
    <>
      <SchemaOrg schema={schema} />
      <nav aria-label="Breadcrumb" className="py-4 px-6 text-sm text-muted">
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-muted/50">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-foreground font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-accent-text transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
