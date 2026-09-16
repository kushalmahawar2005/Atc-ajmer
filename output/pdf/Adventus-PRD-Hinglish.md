# Adventus jaisa admissions platform
## Product Requirements Document

**Easy Hinglish | Version 1.0 | 9 September 2026**

### Is document ka seedha matlab
Ye plan batata hai ki study-abroad agency ke liye kaunsa software banana hai, har feature kaise chalega, aur development kis order mein karni hai. Reference Adventus ke supplied recruiter account ka read-only review hai.

**Product:** Student enquiry se course selection, documents, university application, offer, visa, joining aur commission tak ek connected workspace.

**Sabse important rule:** Ek student ka ek main profile hoga. Wo 3 courses mein apply karega to 3 separate applications hongi. Har application ka status, intake, documents aur result alag hoga.

### Pehle kya banana hai
1. Login, agency/team access aur staff permissions.
2. Leads, students, follow-ups aur profile.
3. University/course/intake catalog, search aur shortlist.
4. Documents, application review aur submission tracking.
5. Offer, visa, joining, tasks aur basic commission tracking.

Student portal, messaging integrations, advanced finance, university integrations aur AI practice ko phased roadmap mein rakha gaya hai.

### Review ka result
Supplied login se recruiter/counsellor workspace khula; URL mein admin hone ka matlab platform super-admin access nahi hai. Account mein staff, teams aur company settings bhi available the. Student Portal settings par disabled/upgrade message mila.

**Production par koi student create, upload, save, submission, message, status update ya setting change nahi kiya gaya.** Login, read-only navigation aur search kiya gaya. Blank Add Student form ka first step dekha, save nahi kiya.

**Deliverable:** Analysis + proposed PRD + implementation guide. Ye Adventus ka source-code audit ya confirmed internal architecture nahi hai.

<!-- PAGE -->
# 01 / Kaise padhein aur kya verify hua

### Reading guide
Business samajhne ke liye sections 02-04 padho. Feature-wise development ke liye 05-12. Developer handover ke liye 13-17. Sources aur open decisions section 18 mein hain.

| Label | Iska matlab |
| --- | --- |
| DEKHA | Supplied account mein page, fields ya control actually dekha. |
| LIMITED | Menu/setting dekhi, lekin full working flow verify nahi hua. |
| PUBLIC | Official Adventus public website par feature describe hai. |
| PROPOSED | Tumhare naye product ke liye recommendation; Adventus internals ka claim nahi. |

### Read-only scope
Dashboard, course search, advanced filters, sample course detail, country guide, student list, representative student workspace, shortlist, documents list, application overview, commission list, team list, staff screen, lead-import screen, assessments, Casper list aur account settings inspect kiye.

Existing records mein sirf interface aur workflow samajhne ke liye limited sampling hui. Student documents ki actual files open/download nahi ki gayin. Report mein credentials, real student identities aur private file links include nahi hain.

### Jo test nahi kiya
- Create/edit/delete, CSV import execution, file uploads aur document approval.
- Actual university submission, offer acceptance, visa update, payments aur payouts.
- Email/WhatsApp delivery, invitations aur external integrations.
- Platform-owner, institution-user aur student-user ke full portals.
- Source code, database, server permissions, vulnerability testing, load tests aur mobile/device testing.

### Working assumption
PRD ek similar standalone admissions product ke liye hai. Pehle ek agency ka pilot; multiple agencies ko support karne layak data structure shuru se. Branding, target countries, business agreements aur scale abhi final nahi hain. Existing local Springboard website ko modify ya Adventus ke saath connect karna is task ka scope nahi hai.

<!-- PAGE -->
# 02 / Actual platform mein kya mila

| Section | Dekha hua feature | PRD mein implication |
| --- | --- | --- |
| Dashboard | Application milestones, pending actions, Priority Tasks, institutes, support, webinars/tutorials | Kaam aur deadlines ko dashboard ka centre banao. |
| Course Search | Student ya nationality, India ke liye region, intake, destination, advanced filters | Student context ke saath search; required region clearly dikhana. |
| Course detail | Overview, admission tab, dates, institution/country tabs, fee currency/unit, delivery, duration | Course aur intake ko separate records banao. |
| Student lists | All/My/Unassigned, active status, search, period, phase filters | Owner-based CRM aur filtered lists. |
| Student workspace | Completion %, preferences, tasks, timeline, application updates | Ek student ki complete work screen. |
| Shortlist | Saved vs shortlisted courses, rank, intake, course details | Save, shortlist aur submit alag actions. |
| Documents | Application/Offer-Acceptance/Visa groups; mandatory/additional; review state | Institution aur stage-specific document checklist. |
| Applications | Draft/Submitted/Cancelled, assessment substatus, dates, timeline, commission status | Application lifecycle aur substatus separate. |
| Commission | Student/application/institution/intake/destination/status/remark/update columns | Basic finance tracking; payout engine verify nahi hua. |
| Team list | Team-specific students aur admission phase filters | Team access aur assignment rules. |

### Important details jo miss nahi hone chahiye
Search mein academic level, education country, grading system, backlogs, education gap, subject, English exam, institution, course level/discipline, duration, delivery, fees aur reported turnaround filters mile. Quick Uni Finder, Share, saved courses aur commission filter ke controls bhi dikh rahe the; unke end-to-end actions test nahi kiye.

Document screen par supported formats PDF/TXT/RTF/JPG/JPEG/ZIP/DOC/DOCX aur 15 MB limit displayed thi. Ye observed reference hai; proposed MVP upload policy section 08 mein narrower hai.

Evidence: authenticated UI observations E1-E6; source map section 18.

<!-- PAGE -->
# 03 / Settings, advanced features aur gaps

| Feature | Evidence / availability | Build decision |
| --- | --- | --- |
| Staff | Staff screen, name/email/team/actions columns; Add Staff control | Role-based staff management in MVP. |
| Lead import | CSV file, assign-to, header-row checkbox, Parse CSV | Preview aur duplicate handling ke saath controlled import. |
| Pre-assessment | Total/Pending/Recommended/Accepted/Submitted/Rejected/Not Suitable states | P1 advisory review queue. |
| Casper AI Interview | UK lodged applications ke liye practice list; institution/program/interview status | P2 optional; interview run nahi kiya. |
| Account Settings | Account, Company Contact, Finance, Student Portal tabs | Workspace settings with restricted access. |
| Student Portal | Disabled; upgrade message | Actual portal inspect nahi hua; proposed P1. |
| Other settings | Terms, My Plan, Account Management, Facebook Lead Integration menu items | Visibility only; billing/integration behaviour unverified. |
| Help | Knowledge Base, Estimate Commission, Training Hub | Training/help library; iframe content review limited. |

### UI/content improvements for your product
**1. Next action ko priority:** Dashboard par promotional institutes se pehle overdue tasks aur missing documents dikhao. Reference dashboard ke top area mein featured institutions prominent the.

**2. Clear status language:** Sample shortlist mein raw label `offer-paused-other` visible tha. Naye product mein user-friendly status aur reason dikhao. Is single observation ko site-wide defect count nahi maana gaya.

**3. Data freshness:** Australia guide mein 2017/2018 references the. Country advice par source aur last-reviewed date mandatory rakho; visa timelines ko live guarantee ki tarah present mat karo.

**4. Missing data explain karo:** Sample admission-requirements tab par readable detail nahi mili. Empty/failed/unavailable states alag dikhne chahiye, saath mein next step.

**5. Clear navigation:** Collapsed icon sidebar ke saath labels/tooltips aur accessible names rakho. Phone layout ko launch se pehle separately test karna hai.

Ye product-design findings hain. Backend security, real performance aur admission accuracy ka score read-only UI se nahi diya ja sakta.

<!-- PAGE -->
# 04 / Product goal, users aur full journey

### Goal
Counsellor ko har student ke liye turant pata chale: status kya hai, next kaam kya hai, zimmedari kiski hai, last date kya hai, aur kya missing hai.

### Example: demo student Asha
Enquiry aayi. Counsellor assign hua. Asha ki education, English score, budget aur preferences record hui. 5 courses save hue, 3 shortlist hue aur 2 applications ready hui. Ek university ne additional document maanga, doosri ne conditional offer diya. Dono applications ki history independent rahegi.

Documents complete hone ke baad institution confirmation, acceptance/deposit evidence, visa progress aur actual joining record hogi. Commission applicable agreement aur evidence se track hoga. Ye fictional example hai.

| User | Main responsibility | Access boundary |
| --- | --- | --- |
| Platform owner | Agencies, shared catalog, platform configuration | Student files ka broad default access nahi; controlled support access. |
| Agency owner | Own agency/team, assignments, reports, approvals | Doosri agency ka data nahi. |
| Manager | Own branch/team workload aur cases | Assigned branch/team scope. |
| Counsellor | Leads, student profile, shortlist, documents, draft applications | Assigned students; finance approvals nahi. |
| Admissions reviewer | Completeness, document review, return-for-fix, approval | Assigned application scope. |
| Submission operator | Approved package submit karke acknowledgement record karna | Review ke bina submission nahi. |
| Finance operator | Fees/receipts, commission, reconciliation | Relevant finance data only. |
| Student, P1 | Own profile, tasks, uploads, allowed updates | Internal notes aur commissions hidden. |
| Institution user, P2 | Explicitly shared applications and catalog | Agency leads/unrelated cases hidden. |

**Implementation:** Role + agency + team + record assignment checks server par har read/write/download/export mein lagen. Pilot mein ek person multiple roles hold kar sakta hai; approval actions ki history phir bhi rahegi.

<!-- PAGE -->
# 05 / Login, agency setup aur staff

**Priority: MVP | Reference: DEKHA + proposed controls**

### Kya banana hai
Email/password login, forgot-password flow, session expiry, logout, staff invitations, role selection, teams/branches, active/inactive users aur workspace details. Public multi-agency signup/approval P1 mein; pilot agency manually provision ho sakti hai.

### Screen aur fields
| Screen | Required information / action |
| --- | --- |
| Login | Email, password, forgot password; clear generic error. |
| Staff list | Name, email, role, team, status, last active; search/filter. |
| Staff setup | Name, work email, role, team/branch, invitation status. |
| Workspace | Name, company contact, timezone, branding, allowed settings. |
| Team | Name, manager, members, student visibility and assignment. |

### Kaise implement hoga
1. User aur agency membership alag store karo. Email ka account hona aur kisi agency ka access hona alag checks hain.
2. Invite expiry aur single-use token rakho. Staff MFA aur secure account recovery implement karo.
3. Session server-validated ho; inactive user ka access revoke ho. Sensitive actions par current permission dobara check ho.
4. Password hash store ho; raw password kabhi database/log/report mein nahi. Browser ko secure session cookie mile.
5. Staff removal par open cases manager ke assignment queue mein aayein. Historical work usi original actor ke naam par rahe.

### Complete kab maana jayega
Counsellor apne assigned student ko khol sake; unrelated agency ka direct URL/file link reject ho. Finance action sirf permitted user kare. Deactivated staff protected pages aur downloads access na kar sake.

**Common mistake:** Frontend par button hide karna security nahi hai. Server bhi operation reject kare. Private pages ko search engines se hide karna access-control ka replacement nahi.

<!-- PAGE -->
# 06 / Leads, students aur follow-ups

**Priority: MVP | Reference: DEKHA; lead lifecycle PROPOSED**

### Kya banana hai
Enquiry capture, lead list, owner assignment, next follow-up, lead-to-student conversion, student search/filters, profile completion aur history. Suggested lead stages: New, Contacted, Counselling, Qualified, Converted, Not proceeding. Student admission phase alag field ho.

| Data group | Fields |
| --- | --- |
| Basic identity | First/last name, email, phone/country code, nationality, region; DOB only when needed. |
| Ownership | Agency, branch/team, counsellor, lead source, created date. |
| Study preferences | Destination, intended level/discipline, intake, budget/currency, onshore status. |
| Education | Qualification, institution, country, grading system, score, dates, backlogs/gap. |
| Exams/experience | Test type, overall/component scores, test date; relevant work history. |
| Follow-up | Next action, assignee, due date, priority, notes, outcome. |
| Sharing permission | Student consent/authorization, purpose, timestamp, evidence/version. |

### Actual reference aur proposed design
Observed Add Student first step mein first/last name, nationality, phone, email, assigned counsellor aur counsellor phone fields the; India ke liye region bhi dikha. 3-step indicator tha. Aage ke wizard steps save kiye bina verify nahi hue. Upar ka full field model proposed hai.

### Import ka safe workflow
CSV select -> columns map -> preview -> invalid rows/possible duplicates -> staff choices -> import summary. Same file retry se duplicate batch na bane. Family members ka shared email possible hai, isliye automatic merge mat karo.

Lead convert hone par student record create/link ho, source aur old follow-ups preserve hon. Profile completion required fields se calculate ho; 100% profile ka matlab har application complete hona nahi.

**Acceptance:** Ek lead assign karke follow-up list mein aa sake; conversion se notes lost na hon; invalid email/date explain ho; duplicate contact warning aaye; active filters pagination/export par same rahen.

<!-- PAGE -->
# 07 / Course catalog, search aur shortlist

**Priority: MVP | Reference: search DEKHA; catalog admin PROPOSED**

### Catalog pehle, search uske baad
University -> campus -> course -> intake ka structure banao. Course ka naam same hote hue campus, delivery aur intake ke rules alag ho sakte hain. Authorized spreadsheets/manual entry se start karo; Adventus data ko automatically available assume mat karo.

| Record | Important fields |
| --- | --- |
| Institution/campus | Name, country/city, campus, website, active status, internal relationship owner. |
| Course | Level, discipline, duration/unit, delivery, language, description, source URL. |
| Fees | Amount, currency, per-year/per-semester/total basis, application fee, effective date. |
| Intake | Start date, open date, deadline, census date if applicable, open/closed/unconfirmed status. |
| Eligibility | Qualification, grading system, subject, English/component scores, gap/backlog and exceptions. |
| Maintenance | Data source, reviewed-at/by, version, next-review date, approval status. |

### Search experience
Basic search: keyword + destination + intake + student/nationality context. Advanced filters: level, discipline, institution, fees, duration, delivery, onshore, academics and English score. Selected filters visible chips mein; reset, sort, pagination aur no-results state ho.

Result card: course, campus, location, intake, fee with unit/currency, duration, requirements aur View Details/Save actions. Scholarships/promotions P1 aur clearly labelled; expired entries hide/archive karo.

### Eligibility kaise chalegi
MVP mein transparent rules engine. Har rule ka source/version aur pass/fail/unknown reason. Missing information par **Review needed** dikhao. Different grading systems ko arbitrary percentage mein convert mat karo. Counsellor final review kare; match admission guarantee nahi.

### Saved aur shortlisted alag
Saved = interest; shortlist = selected options with rank/intake/notes. Same course/intake repeat add na ho. Closed intake par warning aur submission gate ho. Rank sirf preference hai, application submission nahi.

**Acceptance:** Do courses ka fee basis/currency clear ho; closed intake blocked; unknown score ko eligible na bolo; one student's shortlist doosre ko affect na kare.

<!-- PAGE -->
# 08 / Documents aur reusable profile

**Priority: MVP | Reference: document UI DEKHA; storage/rules PROPOSED**

### User ko kya dikhega
Application, Offer/Acceptance aur Visa groups. Har document row mein type, mandatory/additional, related application/institution, file version, uploaded date, review status aur missing/replacement reason. Student profile common hoga; institution-specific answers application mein rahenge.

### Document workflow
Missing -> Uploaded -> Scan pending -> Pending review -> Accepted / Needs replacement. Expiry ho to Expired. New upload naya version banaye; old approval automatically new file par apply na ho.

| Rule | Implementation |
| --- | --- |
| Requirements vary | Country + institution/course + intake + stage ke hisaab se versioned checklist. |
| Secure file access | Private storage; server permission check ke baad revoke-aware download proxy; stored file publicly reachable nahi. |
| File policy | Proposed MVP: PDF/JPG/PNG, maximum 15 MB/file; formats configurable later. |
| Unsafe files | Content/type/size validation + malware scan; failed/unscanned file submission se block. |
| Replace document | New version + fresh review; previous submission ka attached version same rahe. |
| Reuse | Same passport version multiple allowed applications mein link ho sake; unrelated files share na hon. |
| Review decision | Reviewer, date, reason; rejection/waiver ke liye reason mandatory. |

Observed reference zyada formats, including ZIP/DOCX, allow karta tha. New product mein additional formats actual partner need aur scanning support ke baad enable karo.

### Complete kab maana jayega
Required missing/expired/unsafe document ke saath submit block ho. Reviewer replacement maange to counsellor/student ko exact next task mile. Download link expire ho; har download par live permission check ho. Unauthorized user ko file name/metadata bhi na mile.

**Important design:** File database mein raw blob ki jagah private object storage mein; database mein ID, owner, category, version, checksum aur review metadata. Submitted packet exact document versions ko reference kare.

<!-- PAGE -->
# 09 / Applications, review aur submission

**Priority: MVP | Reference: screens/statuses DEKHA; full transitions PROPOSED**

### Application screen
Student, course/campus/intake, application ID, owner/reviewer, current stage, substatus, due date, missing checklist, fees, documents, notes, events aur external reference ek jagah. Draft, active/submitted aur closed tabs.

### Internal preparation
Draft -> Ready for review -> In review -> Ready to submit -> Submission pending -> Submitted.

Reviewer ko issue mile: **Needs changes** + exact reason + assigned task. Fix hone par review mein wapas. Approved answers/course/intake/documents materially change hon to approval invalidate ho.

### External progress
Submitted -> Under institution review -> Information requested / Conditional offer / Unconditional offer / Rejected. Information-request loop fix/share ke baad review mein wapas ja sakta hai.

Reference sidebar mein Submitted to Adventus, Lodged with Institutions, Offers Received, Visas Granted, Students Commenced aur Students Deferred mile. In naye product mein intermediary receipt aur university receipt ko separate rakho; ek hi Submitted status se dono imply mat karo. Separate intermediary_received_at aur university_lodged_at/reference fields hon. University receipt confirm hone par hi Under institution review advance ho.

### Submission kaise implement hogi
1. Required fields, sharing authorization, checklist, latest intake availability aur reviewer approval validate karo.
2. Profile answers + course/rule versions + exact document versions ka immutable submission snapshot banao.
3. MVP: operator approved university portal/channel par manually bheje; receipt/reference aur sent date record kare.
4. Future API: unique submission key, acknowledgement, retries aur error queue. Timeout ho to pending/unknown rakho; blindly dubara send mat karo.

### Business rules
One student + course/campus + intake par accidental duplicate applications block karo. Allowed reapplication linked revision ke through ho. Per-student application limit configurable business rule ho; reference platform ka number hardcode na karo.

**Acceptance:** Do applications independently progress karein. Repeated submit action duplicate na banaye. Receipt ke bina university-lodged claim na ho. Profile update se already sent application silently change na ho.

<!-- PAGE -->
# 10 / Offer, visa, joining aur exceptions

**Priority: MVP basic tracking; P1 detailed automation | PROPOSED workflow**

| Step | Kya track hoga | Complete hone ka proof |
| --- | --- | --- |
| Offer | Type, letter, issue/expiry date, conditions | Institution offer evidence. |
| Conditions | Each requirement, owner, due date, submitted proof, institution response | University confirmation; staff tick alone enough nahi. |
| Acceptance | Student decision, date, authorization, acknowledgement | Required acceptance evidence. |
| Deposit | Amount, currency, reference, receipt, reconciliation | Finance-verified receipt; no automatic payment assumption. |
| Institution documents | Destination-specific CAS/CoE/I-20/other record as applicable | Actual institution-issued document. |
| Visa | Preparing, Lodged, Pending, More info, Granted/Refused/Withdrawn/N/A | Relevant reference/decision evidence. |
| Joining | Start date, enrolled/commenced confirmation | Institution confirmation; visa grant alone enough nahi. |

### Alag statuses kyun chahiye
Application decision, visa case aur finance status independent hain. Offer mil sakta hai jab payment pending ho. Visa granted ho sakta hai jab actual joining confirm na hui ho. Ek giant dropdown mein sab mix karne se reports galat hongi.

### Exception paths
- **Withdrawn/Cancelled:** Request aur externally confirmed withdrawal alag events. Reason aur evidence preserve karo.
- **Rejected/Declined/Expired:** Case close ho; other applications active rahein. Reopen sirf authorized role + reason.
- **Deferral:** Request -> Approved/Declined. Approved case new intake se linked revision/application banaye; old intake history overwrite na ho.
- **Visa refusal:** Original decision preserve; reapplication ho to linked new visa case. Student ka next plan manual review se decide ho.
- **Course/intake closed after preparation:** Owner ko alert; alternative intake selection fresh validation/approval se ho.

**Acceptance:** Invalid status jump blocked ho. Every transition actor/date/reason ke saath history mein aaye. Different destinations ke rules configurable hon; visa outcomes software automatically decide na kare.

<!-- PAGE -->
# 11 / Dashboard, tasks aur communication

**Priority: MVP tasks/dashboard; P1 external messaging | DEKHA + PROPOSED**

### Suggested daily dashboard
Top row: overdue tasks, documents needing review, drafts ready for action, pending university responses, offers expiring soon. Har count click karne par same filters wali list khule.

Next section: My Tasks with student/application, next action, assignee, deadline, priority and status. Manager ko team workload aur stuck cases. Institutes, news aur tutorials lower section mein.

| Feature | Implementation rule |
| --- | --- |
| Tasks | Title, linked case, owner, due time/timezone, priority, status, outcome. |
| Auto task creation | Missing document, info request, expiring offer aur stage transition par rule-based task. |
| Timeline | Important event history; event aur note ka visibility scope defined. |
| Internal notes | Agency/reviewer users only; student/university ko automatic share nahi. |
| Case messages | Application-linked conversation; recipients aur visible attachments clear. |
| Notification centre | Unread/read, link to task, deduplication; confidential content preview minimal. |
| Reminders | P1 worker due jobs bheje; retry safe ho, same reminder repeat spam na kare. |

### MVP communication plan
In-app tasks aur internal notes pehle. External university/student messages existing authorized business channel se staff bheje aur outcome record kare. Email/WhatsApp integration P1 mein provider setup, recipient preferences aur delivery status ke saath.

### Useful metrics
Lead-to-student conversion, application submission volume, time awaiting review, missing-document backlog, offer rate, acceptance rate, verified enrolments aur commission receivables. Har report par period, timezone, filters aur metric definition visible ho.

**Reporting rule:** Student count aur application count alag rakho. Offer rate = selected submission cohort mein offer wali applications / us cohort ki submitted applications. Different currencies ko raw sum mat karo.

**Acceptance:** Overdue dashboard count aur filtered task list match karein; task reassignment notifications sahi user ko jaayein; internal note student portal mein leak na ho.

<!-- PAGE -->
# 12 / Commission, portals aur supporting modules

### Finance: MVP manual review, P1 workflow automation
Expected commission, eligible/confirmed receivable, institution payment received, payout approved aur actually paid alag amounts/statuses hon. Application fee, tuition deposit aur commission separate records hon.

**Fields:** Application, agreement version, amount/basis/rate, currency, fees, gross/net, eligibility milestone, invoice/reference, expected date, actual receipt, approver aur remarks.

Agreement kis milestone par rate lock karta hai, wahi configurable rule use karo. Later rate change old case ko silently modify na kare. Refund/clawback aaye to original payment edit karne ke bajay linked adjustment/reversal banao. MVP mein receipts, manual finance review/reconciliation aur approval evidence record hoga. P1 mein multi-step approval, invoice aur reconciliation automation aayegi. Actual bank transfer automation separate scope hai.

Reference commission list verify hui; complete invoice/payout behaviour verify nahi hua. Public commercial percentages tumhare institution agreements ka replacement nahi hain.

### Student portal: P1
Invite-only login; own profile, shortlist, requested uploads, application updates aur next tasks. Internal notes/commission hidden. Existing account mein portal disabled tha, isliye ye proposed scope hai. Student approval ke bina official acceptance/submission automatic na ho.

### Public website and CMS: pilot basic, expanded P1
MVP: basic home/enquiry/contact, login aur approved privacy/terms pages. P1: destinations, public courses/institutions, how it works aur expanded help/CMS. Enquiry form source ke saath CRM lead banaye. Approved content hi publish ho; private student/course-commercial data public response mein leak na ho. Agency branding original ho.

### Pre-assessment: P1
Student academics, destination aur discipline preference -> reviewer queue -> course recommendations / more-info / not-suitable outcome. Outcome advisory ho aur reason record ho. Accepted recommendation se normal profile/application journey chale.

### Institution portal and AI: P2
Institution login sirf shared applications/catalog access kare. AI interview practice optional: consent, session scheduling, practice feedback, retention settings aur human review. Webcam/mic ya real interview start ko silent action mat banao. AI score admission/visa decision nahi hai.

Country guides, help articles aur training videos CMS se manage hon; source, review date aur expiry checks rakho. Advertised services actual staff/partner availability par depend karengi.

<!-- PAGE -->
# 13 / Screen layout aur data structure

### Recommended navigation
Dashboard | Leads | Students | Course Search | Applications | Documents/Review | Tasks | Finance | Reports | Staff/Teams | Settings | Help. Student ke andar Overview, Profile, Shortlist, Documents, Applications, Tasks/Timeline tabs.

### Student screen ka simple layout
**Header:** Student name/ID, counsellor, profile completeness, next deadline.

**Main panel:** Selected tab ka form/list. **Side panel:** Missing items + next actions. **Bottom:** Timeline and internal notes. Phone par side panel main content ke neeche aa jaye.

### Records ka relation
Agency -> Teams/Users -> Leads/Students -> Applications.

Institution -> Campus -> Course -> Intake -> Applications.

Application -> Requirement version + Submission snapshots + Document versions + Offers + Tasks/Messages. Visa case, enrolment aur finance entries linked but separate.

| Main record | Developer ko kya dhyan rakhna hai |
| --- | --- |
| Agency/User/Membership | Tenant isolation, role, team, active status. |
| Lead/Student | Contact, source, owner; education/exam entries child records. |
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
# 14 / Technology aur implementation approach

**PROPOSED architecture. Ye Adventus ki actual technology ka claim nahi hai.**

| Layer | Suggested approach | Easy meaning |
| --- | --- | --- |
| Web interface | Responsive Next.js + TypeScript | Desktop/phone browser se same product. |
| Business rules | Server-side modules and centralized data access | Permissions, validation aur workflow ka main control. |
| Database | PostgreSQL with reviewed migrations | Students, courses aur applications ke connected records. |
| Documents | Private object storage | Files secure jagah; permanent public links nahi. |
| Background jobs | Worker/job queue | Imports, scans, reminders aur integration retries. |
| Search | Indexed database search first | Pilot ke liye simple; measured need par dedicated search engine. |
| Hosting/operations | Separate development, staging, production | Test work aur live business records alag. |
| Monitoring | Errors, failed jobs, audit, backups | Problems visible aur recovery possible. |

### Development structure
Auth/permissions, CRM, catalog, applications, documents, tasks, finance aur integrations separate modules. Har module ka UI + validation + service + database access consistent ho. API/server action dono same permission/business-rule layer use karein.

### Developer action contracts
`createStudent`, `importLeads`, `searchCourses`, `saveShortlist`, `requestDocumentUpload`, `reviewDocument`, `requestApplicationReview`, `approveApplication`, `recordSubmissionReceipt`, `recordOffer`, `recordVisaDecision`, `recordEnrolment`, `recordCommissionReceipt`.

Har write action session + agency scope + role + field validation check kare, transaction use kare aur audit event likhe. Repeated external operations mein idempotency key ho. Ye proposed logical actions hain, discovered Adventus endpoints nahi.

### Build rule
Pehle ek working vertical flow banao: demo lead -> student -> shortlist -> document -> review -> manual receipt -> offer -> closed/enrolled. Phir advanced reports/integrations. Har screen empty/loading/error/permission-denied states handle kare.

Selected technology versions implementation time par installed official docs se confirm karni hain. Is workspace ki local Next.js project-structure/data-security guides review ki gayin; is task mein app code change nahi hua.

<!-- PAGE -->
# 15 / Integrations, security aur quality targets

| Need | MVP practical method | Later, access confirmed hone par |
| --- | --- | --- |
| University/course data | Authorized CSV + catalog editor + review owner | Licensed feed/partner API. |
| Application submission | Approved manual channel, receipt/reference | Partner API + acknowledgement + safe retries. |
| Email/WhatsApp | Staff's approved channel; outcome log | Business provider + delivery status/preferences. |
| Document verification | Human review and checklist | Approved OCR/verification service; human confirmation. |
| Fees/commission | Receipts, agreements, manual reconciliation | Accounting/payment integration with verified events. |
| Visa/enrolment | Authorized staff records evidence | Only available sanctioned interfaces. |

No public Adventus developer API documentation was found in the targeted official-source research. Private APIs may exist; access, rights aur test environment confirm hone se pehle integration promise mat karo.

### Required controls
TLS, secure sessions, staff MFA, least-privilege access, rate limits, server input validation, private files, malware scanning, secret storage, permissioned exports, audit logs aur tested backups. Passwords/tokens/document contents logs mein nahi. Retention/deletion and support-access policy business owner approve kare.

### Proposed measurable release targets
| Area | Initial target; actual baseline abhi measured nahi |
| --- | --- |
| List/search response | Agreed pilot load par p95 server response <= 2 seconds, external provider delay excluded. |
| Common page usability | Defined test phone/laptop and network par main content <= 3 seconds target. |
| Capacity assumption | Pilot test: 10,000 students, 50,000 courses, 25 concurrent staff; business to confirm. |
| Recovery | RPO <= 24h, RTO <= 8h starting targets; restore drill must pass. |
| Usability | Keyboard navigation, visible focus, labelled fields, clear errors; desktop + phone UAT. |

RPO = maximum acceptable data-loss window. RTO = service restore karne ka target time. Tighter business needs hon to backup/hosting design aur cost accordingly revise karo.

<!-- PAGE -->
# 16 / Development roadmap aur dependencies

### Milestone plan
Ye planning estimate hai, quotation/guarantee nahi. Assumption: 2 experienced developers, part-time designer/QA aur available admissions owner; catalog content ready ho. Neeche sequential planning blocks hain; actual calendar allocation team discovery mein confirm karegi.

| Milestone | Indicative duration | Deliverable / exit gate |
| --- | --- | --- |
| Discovery + design | 1-2 weeks | Roles, fields, workflow, pilot catalog, clickable screen designs approved. |
| Access + CRM foundation | 2 weeks | Agency/team access, students/leads/import, task basics, audit. |
| Catalog + search | 2 weeks | Course/intake data, source/version, filters, details, shortlist. |
| Applications + documents | 3-4 weeks | Upload/scan/review, stage rules, snapshot, manual submission proof. |
| Offer/visa/finance/dashboard | 2 weeks | Complete outcome tracking, basic finance evidence, useful reporting. |
| UAT + pilot launch | 2 weeks | Permissions, workflows, restore, training, launch/rollback rehearsal. |

**Rough MVP window: 12-14 weeks** with these assumptions. Team size, institution-specific forms, data cleanup aur partner integrations se estimate change hoga. Limited countries/catalog se pilot risk kam hoga. P1/P2 ka estimate MVP learning aur provider access ke baad.

### MVP/P1/P2 boundary
**MVP:** Core daily admissions operations, one-agency pilot, multi-agency-safe data model, basic public enquiry page, manual submission/payment evidence.

**P1:** Student portal, approved email/WhatsApp, richer finance approvals/invoices, reports/exports, pre-assessment, expanded public CMS aur multi-agency onboarding.

**P2:** Institution portal, licensed catalog/university sync, advanced grade mapping, OCR assistance aur optional AI interview practice.

### Business work jo coding ke parallel chalega
Catalog owner university data supply kare. Admissions lead checklists/status rules approve kare. Finance owner commercial agreements and sample calculations de. Product owner branding, languages, priorities aur pilot users finalize kare. Developers in inputs ko invent na karein.

<!-- PAGE -->
# 17 / Testing aur launch checklist

| # | Scenario | Pass condition |
| --- | --- | --- |
| 1 | Agency A opens agency B student/file URL | Page, API, file aur export access denied; metadata leak nahi. |
| 2 | Staff disabled / wrong role action | Access revoked; server unauthorized operation reject kare. |
| 3 | CSV has valid, duplicate and invalid rows | Preview and clear errors; no silent merge/duplicate retry. |
| 4 | Student applies to two courses | Separate applications/statuses; one rejection doosre ko change na kare. |
| 5 | Missing academic value / closed intake | Match says review needed; closed intake submission blocked. |
| 6 | Missing/expired/unsafe document | Relevant review/submission gate blocks with reason. |
| 7 | Approved document replaced | New version needs review; old sent version preserved. |
| 8 | Reviewer requests fixes | Owner task + reason; resubmission loop and audit work. |
| 9 | Double submit / external timeout | Single logical attempt; unresolved receipt remains pending. |
| 10 | Profile/fee changes after submission | Snapshot same; material-change alert visible. |
| 11 | Conditional offer / deferral / rejection | Evidence-based transitions; old history intact. |
| 12 | Visa granted, no joining evidence | Enrolment automatically confirmed nahi hoti. |
| 13 | Commission rate changed / clawback | Locked calculation intact; linked adjustment and approval. |
| 14 | Internal note or private attachment | Student/institution sees only explicitly allowed data. |
| 15 | Dashboard filter and pagination | Counts and filtered lists match; currency totals separate. |
| 16 | Provider failure / backup restore | Failed jobs visible; restore and permissions tested. |

### Launch ka final gate
Staging mein fictional/redacted test data se above scenarios run hon. Owner, counsellor, reviewer aur finance user apna real business flow accept karein. Pilot institution data current ho, open tasks assigned hon, backups/monitoring/rollback ready ho.

User training mein lead creation, document replacement, missing-info response, receipt recording aur exception handling cover karo. First pilot weeks mein bugs/feedback prioritize karo; original production reference account par testing mat karo.

**Definition of done:** Team ek complete case enquiry se enrolled/closed outcome tak track kar sake, aur finance records evidence ke saath reconcile ho. Hidden parallel spreadsheet se core status maintain karna necessary na ho.

<!-- PAGE -->
# 18 / Open decisions, sources aur handover

### Coding se pehle lock karna hai
1. Single agency tool ya commercial multi-agency product? Pilot scope yahan single agency assumed hai.
2. Initial destinations, institution agreements, courses/intakes aur data-update owner.
3. Kaun review karega, kaun submit karega, aur accepted submission proof kya hoga?
4. Required document/form rules, application limits, student sharing and retention policy.
5. Commission agreement, rate-lock milestone, currencies, adjustments and approver.
6. Student portal/integrations ki priority, branding/languages, actual traffic/team capacity.

### Authenticated observation map - 9 September 2026
E1: [Login](https://app.adventus.io/admin/login) and [dashboard](https://app.adventus.io/counsellor/dashboard).

E2: [Course Search](https://app.adventus.io/course-search) and [sample course](https://app.adventus.io/course/309893), including dates/admission tabs.

E3: [All Students](https://app.adventus.io/recruiter/student-list/all-students); one representative student workspace, shortlist, documents and applications. Private record URLs omitted.

E4: [Commission](https://app.adventus.io/commissions), team list, [Staff](https://app.adventus.io/settings/staff), [Import Leads](https://app.adventus.io/admin/lead/import), account settings. Private workspace URL omitted.

E5: [Pre-assessments](https://app.adventus.io/pre-assessment/list), [Casper list](https://app.adventus.io/recruiter/cas-portal/all-students).

E6: [Countries](https://app.adventus.io/countries), [Australia guide](https://app.adventus.io/country/au/content), [Training Hub](https://app.adventus.io/training-hub). Training iframe content limited.

### Official public references
[Recruiter features](https://adventus.io/recruiters/), [Course Search](https://adventus.io/recruiters/course-search/), [Application Support](https://adventus.io/recruiters/application-support-training/), [Security descriptions](https://adventus.io/recruiters/security/), [Recruiter Terms](https://adventus.io/recruiter-terms), [Pricing](https://adventus.io/pricing-recruiters-new/), [Institution Drive](https://adventus.io/drive/), [Professional Services](https://adventus.io/adventus-professional-services/), [Student enquiry](https://adventus.io/student-inquiry/).

Public pages support feature context, not account entitlement, API availability or independently verified performance. Marketing counts/commercial rates were not adopted as requirements. Proposed workflows, data model, controls and timeline are this PRD's recommendations.

**Developer handover:** Sections 05-12 = features; 13-15 = data/technical rules; 16 = delivery order; 17 = acceptance criteria. Pehla milestone discovery/design aur approved sample catalog hai. Actual implementation is document se alag project phase hoga.
