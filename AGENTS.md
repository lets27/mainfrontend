# AGENTS Guidelines for BOCRA Remaster

This project is a Next.js 15 + TailwindCSS application using pnpm.

---

## 1. Development Mode ONLY

- ALWAYS run:
  pnpm dev

- NEVER run:
  pnpm build (during agent sessions)

Reason:
Production build disables HMR and breaks iterative workflow.

---

## 2. Project Structure

Use App Router:

/app
  /page.tsx (homepage)
  /about
  /media

/components
/lib (data models)
/styles (if needed)

---

## 3. Styling Rules

- Use TailwindCSS ONLY
- Avoid custom CSS unless necessary
- Use utility-first approach

---

## 4. Component Design

- Build reusable components:
  - Cards
  - Sections
  - Buttons
  -any other suitable components

- Keep components small and composable

---

## 5. UI Libraries

Allowed:
- Aceternity UI (visual effects)
- shadcn/ui (core components)
-any other library suitable for styling required

---

## 6. Data Handling

- Store structured content in:
  /lib/data.ts

- Avoid hardcoding content inside components

---

## 7. Code Standards

- Use TypeScript
- Functional components only
- Prefer server components unless interactivity is needed

---

## 8. Performance

- Avoid unnecessary client components
- Use lazy loading where needed

---

## 9. Content Integrity

- Do NOT fabricate content
- Use only extracted BOCRA data
- Maintain regulatory tone

---

## 10. Commit Mentality (Even Without Git)

Work in small, incremental steps:
1. Structure
2. Data
3. UI
4. Polish