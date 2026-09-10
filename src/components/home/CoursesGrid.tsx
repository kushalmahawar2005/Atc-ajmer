import Image from "next/image";
import Link from "next/link";
import { homeCourses } from "@/lib/home-content";

export default function CoursesGrid() {
  return (
    <>
      <h2 className="section-title">Explore Our Courses</h2>
      <div className="image-links-grid">
        {homeCourses.map((course) => (
          <Link href={course.href} key={course.href} className="home-course-link">
            <div className="image-link-item">
              <Image
                src={course.image}
                alt={course.title}
                width={1586}
                height={992}
                sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 400px"
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
