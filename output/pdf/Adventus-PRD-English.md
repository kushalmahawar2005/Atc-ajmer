# An Adventus-style admissions platform
## Product Requirements Document

**Plain English | Version 1.0 | 9 September 2026**

### Purpose of this document
This plan explains what software to build for a study-abroad agency, how each feature should work, and the order of development. It is based on a read-only review of the supplied Adventus recruiter account.

**Product:** A connected workspace covering student enquiries, course selection, documents, university applications, offers, visas, enrolment and commissions.

**Core rule:** Each student has one main profile. Applying to three courses creates three separate applications. Each application has its own status, intake, documents and outcome.

### What to build first
1. Login, agency/team access and staff permissions.
2. Leads, students, follow-ups and profiles.
3. University/course/intake catalog, search and shortlisting.
4. Documents, application review and submission tracking.
5. Offers, visas, enrolment, tasks and basic commission tracking.

The student portal, messaging integrations, advanced finance, university integrations and AI practice are included in the phased roadmap.

### Review findings
The supplied login opened a recruiter/counsellor workspace. An admin URL does not establish platform super-admin access. Staff, teams and company settings were available. Student Portal settings displayed a disabled/upgrade message.

**No students were created and no files were uploaded, records saved, applications submitted, messages sent, statuses updated or settings changed on production.** Activity was limited to login, read-only navigation and search. The first step of the blank Add Student form was inspected without saving.

**Deliverable:** Analysis, a proposed PRD and an implementation guide. This is not an audit of Adventus source code or a verified description of its internal architecture.

<!-- PAGE -->
# 01 / Reading guide and verification scope

### Reading guide
Read sections 02-04 for the business overview, 05-12 for feature requirements, and 13-17 for developer handover. Sources and outstanding decisions are in section 18.

| Label | Meaning |
| --- | --- |
| OBSERVED | The page, fields or control were actually viewed in the supplied account. |
| LIMITED | A menu or setting was viewed, but the complete workflow was not verified. |
| PUBLIC | The feature is described on Adventus's official public website. |
| PROPOSED | A recommendation for the new product, not a claim about Adventus internals. |

### Read-only scope
The review covered the dashboard, course search, advanced filters, a sample course detail page, a country guide, student lists, a representative student workspace, shortlist, document list, application overview, commission list, team list, staff screen, lead-import screen, assessments, Casper list and account settings.

Existing records were sampled only as needed to understand the interface and workflow. Actual student document files were not opened or downloaded. Credentials, real student identities and private file links are excluded from this report.

### What was not tested
- Creating, editing or deleting records; executing CSV imports; uploading or approving documents.
- Actual university submissions, offer acceptance, visa updates, payments or payouts.
- Email/WhatsApp delivery, invitations or external integrations.
- Complete platform-owner, institution-user or student-user portals.
- Source code, database, server permissions, vulnerabilities, load capacity or mobile/device behaviour.

### Working assumption
This PRD describes a similar standalone admissions product. Start with a single-agency pilot, while designing the data structure to support multiple agencies from the beginning. Branding, target countries, commercial agreements and scale remain to be finalized. Modifying the existing local Springboard website or connecting it to Adventus is outside this task's scope.

<!-- PAGE -->
# 02 / Features observed in the platform

| Section | Observed feature | PRD implication |
| --- | --- | --- |
| Dashboard | Application milestones, pending actions, Priority Tasks, institutes, support, webinars/tutorials | Make tasks and deadlines the focus of the dashboard. |
| Course Search | Student or nationality, region for India, intake, destination, advanced filters | Search with student context; clearly identify required region fields. |
| Course detail | Overview, admission tab, dates, institution/country tabs, fee currency/unit, delivery, duration | Store courses and intakes as separate records. |
| Student lists | All/My/Unassigned, active status, search, period and phase filters | Owner-based CRM and filtered lists. |
| Student workspace | Completion percentage, preferences, tasks, timeline, application updates | A complete workspace for each student. |
| Shortlist | Saved versus shortlisted courses, rank, intake and course details | Saving, shortlisting and submitting are separate actions. |
| Documents | Application/Offer-Acceptance/Visa groups; mandatory/additional; review status | Institution- and stage-specific document checklists. |
| Applications | Draft/Submitted/Cancelled, assessment substatus, dates, timeline, commission status | Separate application lifecycle and substatus. |
| Commission | Student/application/institution/intake/destination/status/remark/update columns | Basic finance tracking; the payout engine was not verified. |
| Team list | Team-specific students and admission phase filters | Team access and assignment rules. |

### Important implementation details
Search filters included academic level, country of education, grading system, backlogs, education gap, subject, English exam, institution, course level/discipline, duration, delivery, fees and reported turnaround time. Quick Uni Finder, Share, saved courses and commission filter controls were also visible; their complete actions were not tested.

The document screen displayed PDF/TXT/RTF/JPG/JPEG/ZIP/DOC/DOCX support and a 15 MB limit. This is an observed reference; the proposed MVP upload policy in section 08 is narrower.

Evidence: authenticated UI observations E1-E6; see the source map in section 18.

<!-- PAGE -->
# 03 / Settings, advanced features and gaps

| Feature | Evidence / availability | Build decision |
| --- | --- | --- |
| Staff | Staff screen with name/email/team/actions columns; Add Staff control | Role-based staff management in MVP. |
| Lead import | CSV file, assignee, header-row checkbox and Parse CSV | Controlled import with preview and duplicate handling. |
| Pre-assessment | Total/Pending/Recommended/Accepted/Submitted/Rejected/Not Suitable states | P1 advisory review queue. |
| Casper AI Interview | Practice list for UK lodged applications; institution/program/interview status | Optional P2 feature; no interview was run. |
| Account Settings | Account, Company Contact, Finance and Student Portal tabs | Workspace settings with restricted access. |
| Student Portal | Disabled; upgrade message | The actual portal was not inspected; proposed P1. |
| Other settings | Terms, My Plan, Account Management and Facebook Lead Integration menu items | Visibility only; billing/integration behaviour unverified. |
| Help | Knowledge Base, Estimate Commission and Training Hub | Training/help library; iframe content review was limited. |

### UI and content improvements for the new product
**1. Prioritize the next action:** Show overdue tasks and missing documents before promotional institutions. Featured institutions were prominent near the top of the reference dashboard.

**2. Use clear status labels:** The raw label `offer-paused-other` appeared in the sampled shortlist. Use a readable status and reason in the new product. This single observation was not treated as a site-wide defect count.

**3. Show data freshness:** The Australia guide contained references to 2017/2018. Require a source and last-reviewed date for country guidance; do not present visa timelines as guaranteed current outcomes.

**4. Explain missing information:** Readable detail was unavailable in the sampled admission-requirements tab. Distinguish empty, failed and unavailable states, with a clear next step.

**5. Make navigation clear:** Provide labels/tooltips and accessible names for the collapsed icon sidebar. Test the phone layout separately before launch.

These are product-design findings. A read-only UI review cannot establish a score for backend security, actual performance or admission accuracy.

<!-- PAGE -->
# 04 / Product goal, users and complete journey

### Goal
For each student, the counsellor should immediately understand the current status, next action, responsible person, deadline and missing information.

### Example: fictional student Asha
An enquiry arrives and a counsellor is assigned. Asha's education, English score, budget and preferences are recorded. Five courses are saved, three are shortlisted and two applications are prepared. One university requests another document; the other issues a conditional offer. The two applications keep independent histories.

After the documents are complete, staff record institution confirmation, acceptance/deposit evidence, visa progress and actual enrolment. Commission is tracked using the applicable agreement and evidence. This is a fictional example.

| User | Main responsibility | Access boundary |
| --- | --- | --- |
| Platform owner | Agencies, shared catalog and platform configuration | No broad default student-file access; controlled support access. |
| Agency owner | Own agency/team, assignments, reports and approvals | No access to another agency's data. |
| Manager | Own branch/team workload and cases | Assigned branch/team scope. |
| Counsellor | Leads, student profiles, shortlist, documents and draft applications | Assigned students; no finance approvals. |
| Admissions reviewer | Completeness checks, document review, return for correction and approval | Assigned application scope. |
| Submission operator | Submit approved packages and record acknowledgement | No submission without review. |
| Finance operator | Fees/receipts, commission and reconciliation | Relevant finance data only. |
| Student, P1 | Own profile, tasks, uploads and permitted updates | Internal notes and commissions hidden. |
| Institution user, P2 | Explicitly shared applications and catalog | Agency leads and unrelated cases hidden. |

**Implementation:** Enforce role, agency, team and record-assignment checks on the server for every read, write, download and export. One person may hold multiple roles during the pilot; approval actions must still retain their history.

<!-- PAGE -->
# 05 / Login, agency setup and staff

**Priority: MVP | Reference: OBSERVED + proposed controls**

### What to build
Email/password login, password recovery, session expiry, logout, staff invitations, role selection, teams/branches, active/inactive users and workspace details. Public signup and approval for multiple agencies belong in P1; the pilot agency can be provisioned manually.

### Screens and fields
| Screen | Required information / action |
| --- | --- |
| Login | Email, password, forgot password; clear generic error. |
| Staff list | Name, email, role, team, status, last active; search/filter. |
| Staff setup | Name, work email, role, team/branch, invitation status. |
| Workspace | Name, company contact, timezone, branding, allowed settings. |
| Team | Name, manager, members, student visibility and assignment. |

### How to implement it
1. Store users and agency memberships separately. Having an email account and having access to an agency require separate checks.
2. Use expiring, single-use invitation tokens. Implement staff MFA and secure account recovery.
3. Validate sessions on the server and revoke access for inactive users. Check current permissions again for sensitive actions.
4. Store password hashes; never store raw passwords in the database, logs or reports. Give the browser a secure session cookie.
5. When a staff member is removed, move their open cases to the manager's assignment queue. Keep historical work attributed to its original actor.

### When it is complete
A counsellor can open their assigned student's record; direct URLs and file links belonging to an unrelated agency are rejected. Only permitted users can perform finance actions. Deactivated staff cannot access protected pages or downloads.

**Common mistake:** Hiding a button in the frontend does not provide security. The server must also reject the operation. Hiding private pages from search engines does not replace access control.

<!-- PAGE -->
# 06 / Leads, students and follow-ups

**Priority: MVP | Reference: OBSERVED; lead lifecycle PROPOSED**

### What to build
Enquiry capture, a lead list, owner assignment, next follow-up, lead-to-student conversion, student search/filters, profile completion and history. Suggested lead stages: New, Contacted, Counselling, Qualified, Converted, Not proceeding. Store the student's admission phase in a separate field.

| Data group | Fields |
| --- | --- |
| Basic identity | First/last name, email, phone/country code, nationality, region; DOB only when needed. |
| Ownership | Agency, branch/team, counsellor, lead source, created date. |
| Study preferences | Destination, intended level/discipline, intake, budget/currency, onshore status. |
| Education | Qualification, institution, country, grading system, score, dates, backlogs/gap. |
| Exams/experience | Test type, overall/component scores, test date; relevant work history. |
| Follow-up | Next action, assignee, due date, priority, notes, outcome. |
| Sharing permission | Student consent/authorization, purpose, timestamp, evidence/version. |

### Observed reference and proposed design
The observed first step of Add Student contained first/last name, nationality, phone, email, assigned counsellor and counsellor phone fields; a region field also appeared for India. There was a three-step indicator. Later wizard steps could not be verified without saving. The full field model above is proposed.

### Safe import workflow
Select CSV -> map columns -> preview -> invalid rows/possible duplicates -> staff choices -> import summary. Retrying the same file must not create a duplicate batch. Family members may share an email address, so do not merge records automatically.

When a lead is converted, create or link the student record and preserve the source and previous follow-ups. Calculate profile completion from required fields; a 100% complete profile does not mean every application is complete.

**Acceptance:** A lead can be assigned and appear in the follow-up list; conversion preserves notes; invalid emails/dates are explained; duplicate contacts trigger a warning; active filters remain consistent across pagination and exports.

<!-- PAGE -->
# 07 / Course catalog, search and shortlist

**Priority: MVP | Reference: search OBSERVED; catalog administration PROPOSED**

### Build the catalog before search
Use a University -> campus -> course -> intake structure. Courses with the same name may have different rules for each campus, delivery mode and intake. Start with authorized spreadsheets/manual entry; do not assume Adventus data is automatically available.

| Record | Important fields |
| --- | --- |
| Institution/campus | Name, country/city, campus, website, active status, internal relationship owner. |
| Course | Level, discipline, duration/unit, delivery, language, description, source URL. |
| Fees | Amount, currency, per-year/per-semester/total basis, application fee, effective date. |
| Intake | Start date, open date, deadline, census date if applicable, open/closed/unconfirmed status. |
| Eligibility | Qualification, grading system, subject, English/component scores, gap/backlog and exceptions. |
| Maintenance | Data source, reviewed-at/by, version, next-review date, approval status. |

### Search experience
Basic search: keyword + destination + intake + student/nationality context. Advanced filters: level, discipline, institution, fees, duration, delivery, onshore, academics and English score. Display selected filters as visible chips; provide reset, sort, pagination and a no-results state.

Result card: course, campus, location, intake, fee with unit/currency, duration, requirements and View Details/Save actions. Scholarships/promotions belong in P1 and must be clearly labelled; hide or archive expired entries.

### How eligibility works
Use a transparent rules engine in the MVP. Each rule must have a source/version and a pass/fail/unknown reason. Show **Review needed** when information is missing. Do not convert different grading systems into arbitrary percentages. The counsellor performs the final review; a match does not guarantee admission.

### Keep saved courses and shortlisted courses separate
Saved = interest; shortlist = selected options with rank/intake/notes. Prevent repeated additions of the same course/intake. Show a warning for a closed intake and block submission. Rank indicates preference only; it does not submit an application.

**Acceptance:** The fee basis and currency are clear when comparing two courses; closed intakes are blocked; an unknown score is not marked eligible; one student's shortlist does not affect another's.

<!-- PAGE -->
# 08 / Documents and reusable profile

**Priority: MVP | Reference: document UI OBSERVED; storage/rules PROPOSED**

### What the user sees
Application, Offer/Acceptance and Visa groups. Each document row shows the type, mandatory/additional designation, related application/institution, file version, upload date, review status and reason for a missing document or replacement request. The student profile is shared across applications; institution-specific answers stay within the application.

### Document workflow
Missing -> Uploaded -> Scan pending -> Pending review -> Accepted / Needs replacement. Use Expired when a document expires. A new upload creates a new version; an old approval must not automatically apply to the new file.

| Rule | Implementation |
| --- | --- |
| Requirements vary | Versioned checklist based on country + institution/course + intake + stage. |
| Secure file access | Private storage; a download proxy that respects access revocation after a server permission check; stored files are not publicly accessible. |
| File policy | Proposed MVP: PDF/JPG/PNG, maximum 15 MB/file; formats configurable later. |
| Unsafe files | Content/type/size validation + malware scan; block submission of failed or unscanned files. |
| Replace document | New version + fresh review; the version attached to an earlier submission remains unchanged. |
| Reuse | The same passport version can be linked to multiple permitted applications; unrelated files must not be shared. |
| Review decision | Reviewer, date, reason; a reason is mandatory for rejection or waiver. |

The observed reference allowed more formats, including ZIP/DOCX. Enable additional formats in the new product only when there is an actual partner need and scanning support is available.

### When it is complete
Block submission if a required document is missing, expired or unsafe. When a reviewer requests a replacement, give the counsellor/student an exact next task. Download links must expire, and current permissions must be checked on every download. Unauthorized users must not receive even the file name or metadata.

**Important design:** Store files in private object storage rather than as raw blobs in the database; keep the ID, owner, category, version, checksum and review metadata in the database. The submitted packet must reference exact document versions.

<!-- PAGE -->
# 09 / Applications, review and submission

**Priority: MVP | Reference: screens/statuses OBSERVED; full transitions PROPOSED**

### Application screen
Keep the student, course/campus/intake, application ID, owner/reviewer, current stage, substatus, due date, missing-item checklist, fees, documents, notes, events and external reference in one place. Provide Draft, active/submitted and closed tabs.

### Internal preparation
Draft -> Ready for review -> In review -> Ready to submit -> Submission pending -> Submitted.

If the reviewer finds an issue: **Needs changes** + exact reason + assigned task. Return the application to review after the issue is fixed. Invalidate approval if approved answers, the course, intake or documents change materially.

### External progress
Submitted -> Under institution review -> Information requested / Conditional offer / Unconditional offer / Rejected. After the requested information is corrected and shared, the application can return to the review stage.

The reference sidebar included Submitted to Adventus, Lodged with Institutions, Offers Received, Visas Granted, Students Commenced and Students Deferred. In the new product, keep intermediary receipt and university receipt separate; a single Submitted status must not imply both. Use separate intermediary_received_at and university_lodged_at/reference fields. Advance to Under institution review only after university receipt is confirmed.

### How to implement submission
1. Validate required fields, sharing authorization, the checklist, current intake availability and reviewer approval.
2. Create an immutable submission snapshot containing profile answers + course/rule versions + exact document versions.
3. MVP: an operator manually submits through the approved university portal/channel and records the receipt/reference and sent date.
4. Future API: use a unique submission key, acknowledgement, retries and an error queue. If a timeout occurs, keep the status pending/unknown; do not blindly send the submission again.

### Business rules
Block accidental duplicate applications for the same student + course/campus + intake. Allow permitted reapplications through a linked revision. Make the per-student application limit a configurable business rule; do not hardcode the reference platform's limit.

**Acceptance:** Two applications can progress independently. Repeated submit actions do not create duplicates. Do not claim an application was lodged with a university without a receipt. Profile updates must not silently change applications already sent.

<!-- PAGE -->
# 10 / Offers, visas, enrolment and exceptions

**Priority: MVP basic tracking; P1 detailed automation | PROPOSED workflow**

| Step | What to track | Evidence of completion |
| --- | --- | --- |
| Offer | Type, letter, issue/expiry date, conditions | Institution offer evidence. |
| Conditions | Each requirement, owner, due date, submitted proof, institution response | University confirmation; a staff checkmark alone is insufficient. |
| Acceptance | Student decision, date, authorization, acknowledgement | Required acceptance evidence. |
| Deposit | Amount, currency, reference, receipt, reconciliation | Finance-verified receipt; do not assume automatic payment. |
| Institution documents | Destination-specific CAS/CoE/I-20/other record as applicable | Actual institution-issued document. |
| Visa | Preparing, Lodged, Pending, More info, Granted/Refused/Withdrawn/N/A | Relevant reference/decision evidence. |
| Enrolment | Start date, enrolled/commenced confirmation | Institution confirmation; a visa grant alone is insufficient. |

### Why separate statuses are needed
The application decision, visa case and finance status are independent. An offer may arrive while payment is pending. A visa may be granted before actual enrolment is confirmed. Combining everything in one large dropdown produces incorrect reports.

### Exception paths
- **Withdrawn/Cancelled:** Record a withdrawal request and an externally confirmed withdrawal as separate events. Preserve the reason and evidence.
- **Rejected/Declined/Expired:** Close the case while keeping other applications active. Reopening requires an authorized role and a reason.
- **Deferral:** Request -> Approved/Declined. For an approved deferral, create a linked revision/application for the new intake; do not overwrite the old intake history.
- **Visa refusal:** Preserve the original decision; if the student reapplies, create a linked new visa case. Decide the student's next plan through manual review.
- **Course/intake closed after preparation:** Alert the owner; selecting an alternative intake requires fresh validation and approval.

**Acceptance:** Invalid status jumps are blocked. Every transition is recorded in the history with actor/date/reason. Rules for different destinations are configurable; the software must not automatically decide visa outcomes.

<!-- PAGE -->
# 11 / Dashboard, tasks and communication

**Priority: MVP tasks/dashboard; P1 external messaging | OBSERVED + PROPOSED**

### Suggested daily dashboard
Top row: overdue tasks, documents needing review, drafts ready for action, pending university responses, offers expiring soon. Clicking each count opens a list with the same filters.

Next section: My Tasks with student/application, next action, assignee, deadline, priority and status. Managers see team workload and stalled cases. Place institutions, news and tutorials in the lower section.

| Feature | Implementation rule |
| --- | --- |
| Tasks | Title, linked case, owner, due time/timezone, priority, status, outcome. |
| Auto task creation | Rule-based tasks for missing documents, information requests, expiring offers and stage transitions. |
| Timeline | Important event history; define the visibility scope of events and notes. |
| Internal notes | Agency/reviewer users only; do not automatically share with students or universities. |
| Case messages | Application-linked conversation; make recipients and visible attachments clear. |
| Notification centre | Unread/read, link to task, deduplication; minimize confidential content in previews. |
| Reminders | A P1 worker sends due jobs; retries must be safe and must not spam users with repeated copies of the same reminder. |

### MVP communication plan
Start with in-app tasks and internal notes. Staff send external university/student messages through existing authorized business channels and record the outcome. Add email/WhatsApp integration in P1 with provider setup, recipient preferences and delivery status.

### Useful metrics
Lead-to-student conversion, application submission volume, time awaiting review, missing-document backlog, offer rate, acceptance rate, verified enrolments and commission receivables. Display the period, timezone, filters and metric definition on every report.

**Reporting rule:** Keep student counts and application counts separate. Offer rate = applications with an offer in the selected submission cohort / submitted applications in that cohort. Do not add amounts in different currencies without conversion.

**Acceptance:** The overdue dashboard count matches the filtered task list; task reassignment notifications reach the correct user; internal notes do not leak into the student portal.

<!-- PAGE -->
# 12 / Commission, portals and supporting modules

### Finance: MVP manual review, P1 workflow automation
Expected commission, eligible/confirmed receivables, institution payments received, approved payouts and amounts actually paid must have separate amounts/statuses. Application fees, tuition deposits and commissions must be separate records.

**Fields:** Application, agreement version, amount/basis/rate, currency, fees, gross/net, eligibility milestone, invoice/reference, expected date, actual receipt, approver and remarks.

Use a configurable rule that matches the milestone at which the agreement locks the rate. A later rate change must not silently modify an existing case. For refunds/clawbacks, create a linked adjustment/reversal instead of editing the original payment. The MVP will record receipts, manual finance review/reconciliation and approval evidence. P1 will add multi-step approvals, invoicing and reconciliation automation. Actual bank transfer automation is a separate scope.

The reference commission list was verified; complete invoice/payout behaviour was not verified. Public commercial percentages do not replace your institution agreements.

### Student portal: P1
Invite-only login; access to the student's own profile, shortlist, requested uploads, application updates and next tasks. Internal notes/commissions remain hidden. The portal was disabled in the existing account, so this is proposed scope. Official acceptance/submission must not happen automatically without student approval.

### Public website and CMS: basic pilot, expanded P1
MVP: basic home/enquiry/contact, login and approved privacy/terms pages. P1: destinations, public courses/institutions, how it works and expanded help/CMS. The enquiry form must create a CRM lead with its source. Publish only approved content; private student/course-commercial data must not leak into public responses. Use original agency branding.

### Pre-assessment: P1
Student academics, destination and discipline preference -> reviewer queue -> course recommendations / more information / not suitable outcome. The outcome must be advisory, with a recorded reason. An accepted recommendation continues into the normal profile/application journey.

### Institution portal and AI: P2
Institution logins must access only shared applications/catalog data. AI interview practice is optional: consent, session scheduling, practice feedback, retention settings and human review. Starting a webcam/microphone or a real interview must not be a silent action. An AI score is not an admission/visa decision.

Manage country guides, help articles and training videos through the CMS; retain sources, review dates and expiry checks. Advertised services will depend on actual staff/partner availability.

<!-- PAGE -->
# 13 / Screen layout and data structure

### Recommended navigation
Dashboard | Leads | Students | Course Search | Applications | Documents/Review | Tasks | Finance | Reports | Staff/Teams | Settings | Help. Within each student workspace, provide Overview, Profile, Shortlist, Documents, Applications and Tasks/Timeline tabs.

### Simple student screen layout
**Header:** Student name/ID, counsellor, profile completeness, next deadline.

**Main panel:** The selected tab's form/list. **Side panel:** Missing items + next actions. **Bottom:** Timeline and internal notes. On phones, place the side panel below the main content.

### Record relationships
Agency -> Teams/Users -> Leads/Students -> Applications.

Institution -> Campus -> Course -> Intake -> Applications.

Application -> Requirement version + Submission snapshots + Document versions + Offers + Tasks/Messages. Visa cases, enrolment and finance entries are linked but separate.

| Main record | Developer considerations |
| --- | --- |
| Agency/User/Membership | Tenant isolation, role, team, active status. |
| Lead/Student | Contact, source, owner; education/exam entries as child records. |
| Course/Intake/Rules | Fee basis, currency, dates, source and version. |
| Application | Unique case, stage/substatus, assignee, external reference. |
| Submission snapshot | Exactly what was sent, when, by whom; immutable. |
| Document/Version | Private file key, category, scan/review/expiry metadata. |
| Offer/Visa/Enrolment | Evidence, dates, outcomes; independent lifecycle. |
| Task/Message/Note | Case link, visibility, recipient/owner, due date. |
| Agreement/Finance entry | Versioned commercial rule, currency, approvals, reversals. |
| Audit event | Actor, action, record, time, allowed change summary. |

**Data rules:** Every private record has agency ownership. Database relations prevent orphaned records. Unique keys prevent duplicate submissions/import batches. Concurrent edits detect stale versions so one staff member's update does not silently overwrite another's.

<!-- PAGE -->
# 14 / Technology and implementation approach

**PROPOSED architecture. This is not a claim about Adventus's actual technology.**

| Layer | Suggested approach | Plain-language explanation |
| --- | --- | --- |
| Web interface | Responsive Next.js + TypeScript | The same product in desktop/phone browsers. |
| Business rules | Server-side modules and centralized data access | Central control for permissions, validation and workflow. |
| Database | PostgreSQL with reviewed migrations | Connected student, course and application records. |
| Documents | Private object storage | Secure file storage without permanent public links. |
| Background jobs | Worker/job queue | Imports, scans, reminders and integration retries. |
| Search | Indexed database search first | Keep the pilot simple; add a dedicated search engine when measured needs justify it. |
| Hosting/operations | Separate development, staging, production | Test work and live business records remain separate. |
| Monitoring | Errors, failed jobs, audit, backups | Make problems visible and recovery possible. |

### Development structure
Use separate modules for authentication/permissions, CRM, catalog, applications, documents, tasks, finance and integrations. Each module must follow a consistent UI + validation + service + database access structure. APIs and server actions must use the same permission/business-rule layer.

### Developer action contracts
`createStudent`, `importLeads`, `searchCourses`, `saveShortlist`, `requestDocumentUpload`, `reviewDocument`, `requestApplicationReview`, `approveApplication`, `recordSubmissionReceipt`, `recordOffer`, `recordVisaDecision`, `recordEnrolment`, `recordCommissionReceipt`.

Every write action must check the session + agency scope + role + field validation, use a transaction and write an audit event. Use idempotency keys for repeated external operations. These are proposed logical actions, not discovered Adventus endpoints.

### Build rule
First build one working end-to-end flow: demo lead -> student -> shortlist -> document -> review -> manual receipt -> offer -> closed/enrolled. Then add advanced reports/integrations. Every screen must handle empty/loading/error/permission-denied states.

Confirm the selected technology versions against the installed official documentation during implementation. The local Next.js project-structure/data-security guides in this workspace were reviewed; no application code was changed in this task.

<!-- PAGE -->
# 15 / Integrations, security and quality targets

| Need | Practical MVP method | Later, once access is confirmed |
| --- | --- | --- |
| University/course data | Authorized CSV + catalog editor + review owner | Licensed feed/partner API. |
| Application submission | Approved manual channel, receipt/reference | Partner API + acknowledgement + safe retries. |
| Email/WhatsApp | Staff's approved channel; outcome log | Business provider + delivery status/preferences. |
| Document verification | Human review and checklist | Approved OCR/verification service; human confirmation. |
| Fees/commission | Receipts, agreements, manual reconciliation | Accounting/payment integration with verified events. |
| Visa/enrolment | Authorized staff records evidence | Only available sanctioned interfaces. |

No public Adventus developer API documentation was found in the targeted official-source research. Private APIs may exist; do not promise an integration before access, rights and a test environment are confirmed.

### Required controls
TLS, secure sessions, staff MFA, least-privilege access, rate limits, server input validation, private files, malware scanning, secret storage, permissioned exports, audit logs and tested backups. Passwords/tokens/document contents must not appear in logs. The business owner must approve retention/deletion and support-access policies.

### Proposed measurable release targets
| Area | Initial target; actual baseline has not yet been measured |
| --- | --- |
| List/search response | p95 server response <= 2 seconds at the agreed pilot load, excluding external provider delays. |
| Common page usability | Main content within <= 3 seconds on the defined test phone/laptop and network. |
| Capacity assumption | Pilot test: 10,000 students, 50,000 courses, 25 concurrent staff; business to confirm. |
| Recovery | RPO <= 24h, RTO <= 8h starting targets; restore drill must pass. |
| Usability | Keyboard navigation, visible focus, labelled fields, clear errors; desktop + phone UAT. |

RPO = maximum acceptable data-loss window. RTO = target time to restore service. If business requirements are tighter, revise the backup/hosting design and cost accordingly.

<!-- PAGE -->
# 16 / Development roadmap and dependencies

### Milestone plan
This is a planning estimate, not a quotation/guarantee. Assumptions: 2 experienced developers, a part-time designer/QA resource and an available admissions owner; catalog content is ready. The blocks below are sequential planning blocks; the team will confirm the actual calendar allocation during discovery.

| Milestone | Indicative duration | Deliverable / exit gate |
| --- | --- | --- |
| Discovery + design | 1-2 weeks | Roles, fields, workflow, pilot catalog, clickable screen designs approved. |
| Access + CRM foundation | 2 weeks | Agency/team access, students/leads/import, task basics, audit. |
| Catalog + search | 2 weeks | Course/intake data, source/version, filters, details, shortlist. |
| Applications + documents | 3-4 weeks | Upload/scan/review, stage rules, snapshot, manual submission proof. |
| Offer/visa/finance/dashboard | 2 weeks | Complete outcome tracking, basic finance evidence, useful reporting. |
| UAT + pilot launch | 2 weeks | Permissions, workflows, restore, training, launch/rollback rehearsal. |

**Rough MVP window: 12-14 weeks** with these assumptions. Team size, institution-specific forms, data cleanup and partner integrations will change the estimate. Limiting the pilot's countries/catalog will reduce risk. Estimate P1/P2 after learning from the MVP and confirming provider access.

### MVP/P1/P2 boundary
**MVP:** Core daily admissions operations, one-agency pilot, multi-agency-safe data model, basic public enquiry page, manual submission/payment evidence.

**P1:** Student portal, approved email/WhatsApp, richer finance approvals/invoices, reports/exports, pre-assessment, expanded public CMS and multi-agency onboarding.

**P2:** Institution portal, licensed catalog/university sync, advanced grade mapping, OCR assistance and optional AI interview practice.

### Business work to run alongside development
The catalog owner supplies university data. The admissions lead approves checklists/status rules. The finance owner provides commercial agreements and sample calculations. The product owner finalizes branding, languages, priorities and pilot users. Developers must not invent these inputs.

<!-- PAGE -->
# 17 / Testing and launch checklist

| # | Scenario | Pass condition |
| --- | --- | --- |
| 1 | Agency A opens agency B student/file URL | Page, API, file and export access denied; no metadata leak. |
| 2 | Staff disabled / wrong role action | Access revoked; the server rejects unauthorized operations. |
| 3 | CSV has valid, duplicate and invalid rows | Preview and clear errors; no silent merge or duplicates on retry. |
| 4 | Student applies to two courses | Separate applications/statuses; one rejection does not change the other. |
| 5 | Missing academic value / closed intake | Match says review needed; closed intake submission blocked. |
| 6 | Missing/expired/unsafe document | Relevant review/submission gate blocks with reason. |
| 7 | Approved document replaced | New version needs review; old sent version preserved. |
| 8 | Reviewer requests fixes | Owner task + reason; resubmission loop and audit work. |
| 9 | Double submit / external timeout | Single logical attempt; unresolved receipt remains pending. |
| 10 | Profile/fee changes after submission | Snapshot unchanged; material-change alert visible. |
| 11 | Conditional offer / deferral / rejection | Evidence-based transitions; old history intact. |
| 12 | Visa granted, no enrolment evidence | Enrolment is not automatically confirmed. |
| 13 | Commission rate changed / clawback | Locked calculation intact; linked adjustment and approval. |
| 14 | Internal note or private attachment | Student/institution sees only explicitly allowed data. |
| 15 | Dashboard filter and pagination | Counts and filtered lists match; currency totals separate. |
| 16 | Provider failure / backup restore | Failed jobs visible; restore and permissions tested. |

### Final launch gate
Run the scenarios above in staging using fictional/redacted test data. The owner, counsellor, reviewer and finance user must accept their actual business workflows. Pilot institution data must be current, open tasks assigned, and backups/monitoring/rollback ready.

User training must cover lead creation, document replacement, responses to missing-information requests, receipt recording and exception handling. Prioritize bugs/feedback during the first pilot weeks; do not test on the original production reference account.

**Definition of done:** The team can track a complete case from enquiry to an enrolled/closed outcome, and finance records reconcile with evidence. Maintaining core statuses in a hidden parallel spreadsheet must not be necessary.

<!-- PAGE -->
# 18 / Open decisions, sources and handover

### Decisions to finalize before coding
1. Single-agency tool or commercial multi-agency product? This document assumes a single-agency pilot.
2. Initial destinations, institution agreements, courses/intakes and data-update owner.
3. Who reviews, who submits, and what counts as accepted submission proof?
4. Required document/form rules, application limits, student sharing and retention policy.
5. Commission agreement, rate-lock milestone, currencies, adjustments and approver.
6. Student portal/integration priorities, branding/languages, actual traffic/team capacity.

### Authenticated observation map - 9 September 2026
E1: [Login](https://app.adventus.io/admin/login) and [dashboard](https://app.adventus.io/counsellor/dashboard).

E2: [Course Search](https://app.adventus.io/course-search) and [sample course](https://app.adventus.io/course/309893), including dates/admission tabs.

E3: [All Students](https://app.adventus.io/recruiter/student-list/all-students); one representative student workspace, shortlist, documents and applications. Private record URLs omitted.

E4: [Commission](https://app.adventus.io/commissions), team list, [Staff](https://app.adventus.io/settings/staff), [Import Leads](https://app.adventus.io/admin/lead/import), account settings. Private workspace URL omitted.

E5: [Pre-assessments](https://app.adventus.io/pre-assessment/list), [Casper list](https://app.adventus.io/recruiter/cas-portal/all-students).

E6: [Countries](https://app.adventus.io/countries), [Australia guide](https://app.adventus.io/country/au/content), [Training Hub](https://app.adventus.io/training-hub). Training iframe content review was limited.

### Official public references
[Recruiter features](https://adventus.io/recruiters/), [Course Search](https://adventus.io/recruiters/course-search/), [Application Support](https://adventus.io/recruiters/application-support-training/), [Security descriptions](https://adventus.io/recruiters/security/), [Recruiter Terms](https://adventus.io/recruiter-terms), [Pricing](https://adventus.io/pricing-recruiters-new/), [Institution Drive](https://adventus.io/drive/), [Professional Services](https://adventus.io/adventus-professional-services/), [Student enquiry](https://adventus.io/student-inquiry/).

Public pages support feature context, not account entitlement, API availability or independently verified performance. Marketing counts/commercial rates were not adopted as requirements. Proposed workflows, data model, controls and timeline are this PRD's recommendations.

**Developer handover:** Sections 05-12 = features; 13-15 = data/technical rules; 16 = delivery order; 17 = acceptance criteria. The first milestone is discovery/design and an approved sample catalog. Actual implementation will be a separate project phase from this document.
