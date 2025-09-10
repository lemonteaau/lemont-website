import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "July 2024 – Feb 2025",
    title: "Software Developer Intern",
    description: "Morialta Software",
    icon: FaBriefcase,
  },
  {
    id: 2,
    date: "Feb 2023 – Nov 2024",
    title: "Master of Computing and Innovation",
    description: "University of Adelaide",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    date: "Sep 2018 – Jun 2022",
    title: "Bachelor of Business Administration",
    description: "Shanghai University",
    icon: FaGraduationCap,
  },
];

export default function AboutTimeline() {
  return (
    <Timeline defaultValue={3} className="mx-auto">
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">
              <span className="text-primary">{item.title}</span>
            </TimelineTitle>
            <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
              <item.icon size={14} />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
