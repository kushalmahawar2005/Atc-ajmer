import Image from "next/image";
import Link from "next/link";
import { homeCourses } from "@/lib/home-content";

export default function CoursesGrid() {
  return (
    <>
      <h2 className="section-title">Explore Our Courses</h2>
      <div className="image-links-grid">
        {homeCourses.map((course) => (
          <Link href={course.href} key={course.href}>
            <div className="image-link-item">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={300}
                loading="lazy"
              />
              <div className="image-link-title">{course.title}</div>
              <div className="image-link-overlay">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
