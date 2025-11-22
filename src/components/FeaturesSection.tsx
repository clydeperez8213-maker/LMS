import { FeatureCard } from "./FeatureCard";
import captivatingClasses from "@/assets/captivating-classes.jpg";
import bestTeachers from "@/assets/best-teachers.jpg";
import engagingActivities from "@/assets/engaging-activities.jpg";
import comeToPcu from "@/assets/come-to-pcu.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Captivating Classes",
      description: "Interactive classes will keep students engaged and they will be able to learn at a faster pace.",
      image: captivatingClasses,
    },
    {
      title: "The Best Teachers",
      description: "Our staff comes from diverse teaching backgrounds and they are some of the best in the country.",
      image: bestTeachers,
    },
    {
      title: "Engaging Activities",
      description: "Philippine Christian University has exciting annual activities planned for each school year. Take a look now.",
      image: engagingActivities,
    },
    {
      title: "Come to PCU",
      description: "Ready to take the next step? Enroll now by sending us a message through our contact form, and we'll get in touch with you shortly.",
      image: comeToPcu,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
