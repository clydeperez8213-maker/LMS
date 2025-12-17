import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export const FeatureCard = ({ title, description, image, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="group hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border shadow-blue-sm animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="space-y-4">
        <div className="w-full aspect-square rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
