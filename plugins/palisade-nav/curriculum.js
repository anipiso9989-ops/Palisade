// One ordered navigation model shared by the static renderer and lazy browser tree.
export function curriculumTree(courses, curriculum) {
  return courses.map((course) => {
    const base = `courses/${course.slug}`
    const units = curriculum[course.slug]?.units ?? []
    return {
      title: course.title,
      path: base,
      children: [
        { title: "Syllabus", path: `${base}/syllabus` },
        {
          title: "Units",
          path: `${base}/units`,
          children: units.map((unit) => {
            const path = `${base}/units/${unit.slug}`
            return {
              title: `Unit ${unit.number} — ${unit.title}`,
              path,
              children: [
                ...unit.topics.map((topic) => ({
                  title: `${topic.number} — ${topic.title}`,
                  path: `${path}/${topic.slug}`,
                })),
                { title: "Unit examination", path: `${path}/examination` },
              ],
            }
          }),
        },
        {
          title: "Final examinations",
          path: `${base}/examinations`,
          children: [
            { title: "Final Examination A", path: `${base}/examinations/final-a` },
            { title: "Final Examination B", path: `${base}/examinations/final-b` },
          ],
        },
      ],
    }
  })
}
