import { useState, useEffect } from "react";

const APP_VERSION = "2.1.0";

function SectionCard({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex justify-between items-center rounded-2xl rounded-b-none bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-slate-50">
          {title}
        </span>
        <span className="text-lg text-slate-300">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 py-3 md:px-5 md:py-4 space-y-4 text-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}

function Dropdown({ label, value, setValue, options }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs md:text-sm font-medium text-slate-200">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-slate-50 shadow-inner outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="bg-slate-900 text-slate-100"
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextField({ label, value, setValue, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs md:text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-slate-50 shadow-inner outline-none placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function TextArea({ label, value, setValue, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs md:text-sm font-medium text-slate-200">
        {label}
      </label>
      <textarea
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-slate-50 shadow-inner outline-none placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 min-h-[80px] transition-all"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [study, setStudy] = useState("Ankle"); // Ankle / Spine / Knee / Shoulder
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      setShowInstallBanner(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    const choice = await installPromptEvent.userChoice;
    if (choice.outcome === "accepted") {
      setShowInstallBanner(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Common options
  const ligamentOptions = ["Normal", "Sprain", "Partial tear", "Complete tear"];
  const tendonOptions = [
    "Normal",
    "Tendinosis",
    "Tenosynovitis",
    "Partial tear",
    "Full-thickness tear",
  ];
  const effusionOptions = ["None", "Mild", "Moderate", "Large"];

  // ----------------- ANKLE (17-section high detail, condensed state) -----------------

  const [patientId, setPatientId] = useState("");
  const [ageSex, setAgeSex] = useState("");
  const [side, setSide] = useState("");
  const [indication, setIndication] = useState("");

  const [talarOltStage, setTalarOltStage] = useState("");
  const [boneMarrowStatus, setBoneMarrowStatus] = useState("");

  const [tibiotalarEffusion, setTibiotalarEffusion] = useState("");
  const [tibiotalarCartilage, setTibiotalarCartilage] = useState("");
  const [subtalarEffusion, setSubtalarEffusion] = useState("");

  const [atfl, setATFL] = useState("");
  const [cfl, setCFL] = useState("");
  const [ptfl, setPTFL] = useState("");
  const [latGrade, setLatGrade] = useState("");

  const [deltoidSuperficial, setDeltoidSuperficial] = useState("");
  const [deltoidDeep, setDeltoidDeep] = useState("");

  const [aitfl, setAITFL] = useState("");
  const [pitfl, setPITFL] = useState("");
  const [ioLig, setIOLig] = useState("");
  const [syndesmosisGrade, setSyndesmosisGrade] = useState("");

  const [springSmcnl, setSpringSmcnl] = useState("");

  const [cervicalLig, setCervicalLig] = useState("");
  const [itclLig, setItclLig] = useState("");

  const [bifurcateCn, setBifurcateCn] = useState("");
  const [bifurcateCc, setBifurcateCc] = useState("");

  const [hindfootAlignment, setHindfootAlignment] = useState("");
  const [archProfile, setArchProfile] = useState("");

  const [tpTendon, setTpTendon] = useState("");
  const [peroneusLongus, setPeroneusLongus] = useState("");
  const [peroneusBrevis, setPeroneusBrevis] = useState("");
  const [achillesStatus, setAchillesStatus] = useState("");

  const [muscleStatus, setMuscleStatus] = useState("");

  const [plantarFascia, setPlantarFascia] = useState("");
  const [heelFatPad, setHeelFatPad] = useState("");

  const [tibialNerve, setTibialNerve] = useState("");
  const [tarsalTunnelLesion, setTarsalTunnelLesion] = useState("");

  const [anteriorImpingement, setAnteriorImpingement] = useState("");
  const [posteriorImpingement, setPosteriorImpingement] = useState("");

  const [coalitionType, setCoalitionType] = useState("");
  const [accessoryOssicles, setAccessoryOssicles] = useState("");

  const [subcutEdema, setSubcutEdema] = useState("");
  const [infectionStatus, setInfectionStatus] = useState("");
  const [postOpStatus, setPostOpStatus] = useState("");

  const ankleImpression = [];
  if (talarOltStage) {
    ankleImpression.push(
      `Osteochondral lesion of the talar dome (Hepple stage ${talarOltStage}).`
    );
  }
  if (atfl && atfl !== "Normal") {
    ankleImpression.push(
      `ATFL: ${atfl}${latGrade ? ` (Grade ${latGrade})` : ""}.`
    );
  }
  if (cfl && cfl !== "Normal") ankleImpression.push(`CFL: ${cfl}.`);
  if (ptfl && ptfl !== "Normal") ankleImpression.push(`PTFL: ${ptfl}.`);
  if (deltoidSuperficial && deltoidSuperficial !== "Normal") {
    ankleImpression.push(`Deltoid superficial: ${deltoidSuperficial}.`);
  }
  if (deltoidDeep && deltoidDeep !== "Normal") {
    ankleImpression.push(`Deltoid deep: ${deltoidDeep}.`);
  }
  if (aitfl && aitfl !== "Normal") {
    ankleImpression.push(
      `Syndesmotic AITFL: ${aitfl}${
        syndesmosisGrade ? ` (Grade ${syndesmosisGrade})` : ""
      }.`
    );
  }
  if (springSmcnl && springSmcnl !== "Normal") {
    ankleImpression.push(`Spring ligament: ${springSmcnl}.`);
  }
  if (achillesStatus && achillesStatus !== "Normal") {
    ankleImpression.push(`Achilles tendon: ${achillesStatus}.`);
  }
  if (plantarFascia && plantarFascia !== "Normal") {
    ankleImpression.push(`Plantar fascia: ${plantarFascia}.`);
  }
  if (anteriorImpingement && anteriorImpingement !== "None") {
    ankleImpression.push(`Anterior impingement: ${anteriorImpingement}.`);
  }
  if (posteriorImpingement && posteriorImpingement !== "None") {
    ankleImpression.push(`Posterior impingement: ${posteriorImpingement}.`);
  }
  const ankleImpressionText =
    ankleImpression.length > 0
      ? ankleImpression.join("\n")
      : "No significant abnormality in the ankle. Correlate clinically.";

  // -------------- SPINE (High-detail template: structured, but not insane per-level state) --------------

  const [spineRegion, setSpineRegion] = useState("Lumbar"); // Cervical / Thoracic / Lumbar / Whole spine
  const [spineAlignment, setSpineAlignment] = useState("");
  const [spineLordosis, setSpineLordosis] = useState("");
  const [spineCordSignal, setSpineCordSignal] = useState("");
  const [spineCanalStenosis, setSpineCanalStenosis] = useState("");
  const [spineForaminalStenosis, setSpineForaminalStenosis] = useState("");
  const [spinePfirrmann, setSpinePfirrmann] = useState("");
  const [spineModic, setSpineModic] = useState("");
  const [spineSpondy, setSpineSpondy] = useState("");
  const [spineLevelSummary, setSpineLevelSummary] = useState("");

  const spineImpression = [];
  if (spineRegion) {
    spineImpression.push(`Study region: ${spineRegion} spine.`);
  }
  if (spineAlignment) {
    spineImpression.push(`Global alignment: ${spineAlignment}.`);
  }
  if (spineLordosis) {
    spineImpression.push(`Sagittal profile: ${spineLordosis}.`);
  }
  if (spineCanalStenosis) {
    spineImpression.push(`Canal stenosis: ${spineCanalStenosis}.`);
  }
  if (spineForaminalStenosis) {
    spineImpression.push(`Foraminal stenosis: ${spineForaminalStenosis}.`);
  }
  if (spinePfirrmann) {
    spineImpression.push(`Disc degeneration (Pfirrmann): ${spinePfirrmann}.`);
  }
  if (spineModic) {
    spineImpression.push(`Endplate changes (Modic): ${spineModic}.`);
  }
  if (spineSpondy) {
    spineImpression.push(`Spondylolisthesis: ${spineSpondy}.`);
  }
  if (spineLevelSummary) {
    spineImpression.push(spineLevelSummary);
  }
  const spineImpressionText =
    spineImpression.length > 0
      ? spineImpression.join("\n")
      : "No significant canal or foraminal stenosis. Disc and alignment within expected limits for age.";

  // -------------- KNEE (High-detail template) --------------

  const [kneeSide, setKneeSide] = useState("");
  const [kneeMenisci, setKneeMenisci] = useState("");
  const [kneeACL, setKneeACL] = useState("");
  const [kneePCL, setKneePCL] = useState("");
  const [kneeMCL, setKneeMCL] = useState("");
  const [kneeLCL, setKneeLCL] = useState("");
  const [kneeCartilage, setKneeCartilage] = useState("");
  const [kneeEffusion, setKneeEffusion] = useState("");
  const [kneeBoneMarrow, setKneeBoneMarrow] = useState("");
  const [kneePatella, setKneePatella] = useState("");
  const [kneeSummary, setKneeSummary] = useState("");

  const kneeImpression = [];
  if (kneeSide) kneeImpression.push(`${kneeSide} knee MRI.`);
  if (kneeMenisci) kneeImpression.push(`Menisci: ${kneeMenisci}.`);
  if (kneeACL) kneeImpression.push(`ACL: ${kneeACL}.`);
  if (kneePCL) kneeImpression.push(`PCL: ${kneePCL}.`);
  if (kneeMCL) kneeImpression.push(`MCL: ${kneeMCL}.`);
  if (kneeLCL) kneeImpression.push(`LCL/posterolateral corner: ${kneeLCL}.`);
  if (kneeCartilage)
    kneeImpression.push(`Articular cartilage: ${kneeCartilage}.`);
  if (kneeEffusion) kneeImpression.push(`Joint effusion: ${kneeEffusion}.`);
  if (kneeBoneMarrow) kneeImpression.push(`Bone marrow: ${kneeBoneMarrow}.`);
  if (kneePatella)
    kneeImpression.push(`Patellofemoral alignment: ${kneePatella}.`);
  if (kneeSummary) kneeImpression.push(kneeSummary);
  const kneeImpressionText =
    kneeImpression.length > 0
      ? kneeImpression.join("\n")
      : "No significant ligament, meniscal, or chondral abnormality detected.";

  // -------------- SHOULDER (High-detail template) --------------

  const [shoulderSide, setShoulderSide] = useState("");
  const [shoulderRC, setShoulderRC] = useState("");
  const [shoulderBiceps, setShoulderBiceps] = useState("");
  const [shoulderLabrum, setShoulderLabrum] = useState("");
  const [shoulderAC, setShoulderAC] = useState("");
  const [shoulderGH, setShoulderGH] = useState("");
  const [shoulderAtrophy, setShoulderAtrophy] = useState("");
  const [shoulderInstability, setShoulderInstability] = useState("");
  const [shoulderSummary, setShoulderSummary] = useState("");

  const shoulderImpression = [];
  if (shoulderSide) shoulderImpression.push(`${shoulderSide} shoulder MRI.`);
  if (shoulderRC) shoulderImpression.push(`Rotator cuff: ${shoulderRC}.`);
  if (shoulderBiceps)
    shoulderImpression.push(`Long head biceps: ${shoulderBiceps}.`);
  if (shoulderLabrum) shoulderImpression.push(`Labrum: ${shoulderLabrum}.`);
  if (shoulderAC) shoulderImpression.push(`AC joint: ${shoulderAC}.`);
  if (shoulderGH) shoulderImpression.push(`Glenohumeral joint: ${shoulderGH}.`);
  if (shoulderAtrophy)
    shoulderImpression.push(
      `Muscle atrophy (Goutallier/Patte): ${shoulderAtrophy}.`
    );
  if (shoulderInstability)
    shoulderImpression.push(
      `Instability lesions: ${shoulderInstability}.`
    );
  if (shoulderSummary) shoulderImpression.push(shoulderSummary);
  const shoulderImpressionText =
    shoulderImpression.length > 0
      ? shoulderImpression.join("\n")
      : "No significant rotator cuff, labral, or glenohumeral abnormality identified.";

  // ------------ choose impression for current study ------------

  const impressionText =
    study === "Ankle"
      ? ankleImpressionText
      : study === "Spine"
      ? spineImpressionText
      : study === "Knee"
      ? kneeImpressionText
      : shoulderImpressionText;

  // ------------ render per-study forms ------------

  const renderAnkleForm = () => (
    <>
      <SectionCard title="1. Patient & Technique">
        <div className="grid md:grid-cols-2 gap-4">
          <TextField
            label="Patient ID / Name"
            value={patientId}
            setValue={setPatientId}
            placeholder="ID or initials"
          />
          <TextField
            label="Age / Sex"
            value={ageSex}
            setValue={setAgeSex}
            placeholder="e.g., 32/M"
          />
          <Dropdown
            label="Side"
            value={side}
            setValue={setSide}
            options={["Right", "Left"]}
          />
          <TextField
            label="Clinical indication"
            value={indication}
            setValue={setIndication}
            placeholder="Pain, trauma, instability, etc."
          />
        </div>
      </SectionCard>

      <SectionCard title="2. Bones">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Bone marrow signal (overall)"
            value={boneMarrowStatus}
            setValue={setBoneMarrowStatus}
            options={[
              "Normal",
              "Bone marrow edema",
              "Contusion pattern",
              "Stress reaction",
              "Fracture",
              "AVN pattern",
            ]}
          />
          <Dropdown
            label="Talar OLT Hepple stage"
            value={talarOltStage}
            setValue={setTalarOltStage}
            options={["I", "II", "III", "IV", "V"]}
          />
        </div>
      </SectionCard>

      <SectionCard title="3. Joints">
        <div className="grid md:grid-cols-3 gap-4">
          <Dropdown
            label="Tibiotalar effusion"
            value={tibiotalarEffusion}
            setValue={setTibiotalarEffusion}
            options={effusionOptions}
          />
          <Dropdown
            label="Tibiotalar cartilage"
            value={tibiotalarCartilage}
            setValue={setTibiotalarCartilage}
            options={["Normal", "Thinning", "Focal defect", "Diffuse loss"]}
          />
          <Dropdown
            label="Subtalar effusion"
            value={subtalarEffusion}
            setValue={setSubtalarEffusion}
            options={effusionOptions}
          />
        </div>
      </SectionCard>

      <SectionCard title="4–9. Ligaments (Lateral, Deltoid, Syndesmotic, Spring, Sinus tarsi, Bifurcate)">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="ATFL"
            value={atfl}
            setValue={setATFL}
            options={ligamentOptions}
          />
          <Dropdown
            label="CFL"
            value={cfl}
            setValue={setCFL}
            options={ligamentOptions}
          />
          <Dropdown
            label="PTFL"
            value={ptfl}
            setValue={setPTFL}
            options={ligamentOptions}
          />
          <Dropdown
            label="Lateral sprain grade"
            value={latGrade}
            setValue={setLatGrade}
            options={["I", "II", "III"]}
          />
          <Dropdown
            label="Superficial deltoid fibers"
            value={deltoidSuperficial}
            setValue={setDeltoidSuperficial}
            options={ligamentOptions}
          />
          <Dropdown
            label="Deep deltoid fibers"
            value={deltoidDeep}
            setValue={setDeltoidDeep}
            options={ligamentOptions}
          />
          <Dropdown
            label="AITFL"
            value={aitfl}
            setValue={setAITFL}
            options={ligamentOptions}
          />
          <Dropdown
            label="PITFL"
            value={pitfl}
            setValue={setPITFL}
            options={ligamentOptions}
          />
          <Dropdown
            label="Interosseous ligament"
            value={ioLig}
            setValue={setIOLig}
            options={ligamentOptions}
          />
          <Dropdown
            label="Syndesmotic injury grade"
            value={syndesmosisGrade}
            setValue={setSyndesmosisGrade}
            options={["I", "II", "III"]}
          />
          <Dropdown
            label="Spring ligament (SMCNL)"
            value={springSmcnl}
            setValue={setSpringSmcnl}
            options={["Normal", "Thickened", "Partial tear", "Complete tear"]}
          />
          <Dropdown
            label="Cervical ligament"
            value={cervicalLig}
            setValue={setCervicalLig}
            options={["Normal", "Degenerated", "Torn"]}
          />
          <Dropdown
            label="Interosseous talocalcaneal ligament"
            value={itclLig}
            setValue={setItclLig}
            options={["Normal", "Degenerated", "Torn"]}
          />
          <Dropdown
            label="Bifurcate ligament – calcaneonavicular"
            value={bifurcateCn}
            setValue={setBifurcateCn}
            options={ligamentOptions}
          />
          <Dropdown
            label="Bifurcate ligament – calcaneocuboid"
            value={bifurcateCc}
            setValue={setBifurcateCc}
            options={ligamentOptions}
          />
        </div>
      </SectionCard>

      <SectionCard title="10–13. Alignment, Tendons, Muscles, Plantar">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Hindfoot alignment"
            value={hindfootAlignment}
            setValue={setHindfootAlignment}
            options={["Neutral", "Varus", "Valgus"]}
          />
          <Dropdown
            label="Arch profile"
            value={archProfile}
            setValue={setArchProfile}
            options={["Normal", "Pes planus", "Pes cavus"]}
          />
          <Dropdown
            label="Tibialis posterior tendon"
            value={tpTendon}
            setValue={setTpTendon}
            options={tendonOptions}
          />
          <Dropdown
            label="Peroneus longus"
            value={peroneusLongus}
            setValue={setPeroneusLongus}
            options={tendonOptions}
          />
          <Dropdown
            label="Peroneus brevis"
            value={peroneusBrevis}
            setValue={setPeroneusBrevis}
            options={tendonOptions}
          />
          <Dropdown
            label="Achilles tendon"
            value={achillesStatus}
            setValue={setAchillesStatus}
            options={[
              "Normal",
              "Tendinosis",
              "Partial tear (<25%)",
              "Partial tear (25–50%)",
              "High-grade (>50%)",
              "Complete rupture",
            ]}
          />
          <Dropdown
            label="Overall muscle status"
            value={muscleStatus}
            setValue={setMuscleStatus}
            options={[
              "Normal bulk/signal",
              "Edema / myositis",
              "Denervation edema",
              "Fatty atrophy",
            ]}
          />
          <Dropdown
            label="Plantar fascia"
            value={plantarFascia}
            setValue={setPlantarFascia}
            options={[
              "Normal",
              "Thickened",
              "Partial tear",
              "Full-thickness tear",
              "Enthesopathy at origin",
            ]}
          />
          <Dropdown
            label="Heel fat pad"
            value={heelFatPad}
            setValue={setHeelFatPad}
            options={["Normal", "Edema", "Atrophy"]}
          />
        </div>
      </SectionCard>

      <SectionCard title="14–17. Tarsal Tunnel, Impingement, Coalitions, Soft Tissues">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Tibial nerve"
            value={tibialNerve}
            setValue={setTibialNerve}
            options={["Normal", "Thickened", "High T2 signal", "Compressed"]}
          />
          <Dropdown
            label="Tarsal tunnel lesion"
            value={tarsalTunnelLesion}
            setValue={setTarsalTunnelLesion}
            options={[
              "None",
              "Ganglion",
              "Varicosity",
              "Lipoma",
              "Other space-occupying lesion",
            ]}
          />
          <Dropdown
            label="Anterior impingement"
            value={anteriorImpingement}
            setValue={setAnteriorImpingement}
            options={[
              "None",
              "Gutter synovitis",
              "Anterior osteophytes",
              "Soft tissue impingement",
            ]}
          />
          <Dropdown
            label="Posterior impingement"
            value={posteriorImpingement}
            setValue={setPosteriorImpingement}
            options={[
              "None",
              "Os trigonum syndrome",
              "Stieda process impingement",
              "FHL tenosynovitis-related",
            ]}
          />
          <Dropdown
            label="Coalition type"
            value={coalitionType}
            setValue={setCoalitionType}
            options={[
              "None",
              "Calcaneonavicular",
              "Talocalcaneal",
              "Other tarsal coalition",
            ]}
          />
          <Dropdown
            label="Accessory ossicles"
            value={accessoryOssicles}
            setValue={setAccessoryOssicles}
            options={[
              "None",
              "Os trigonum",
              "Os peroneum",
              "Accessory navicular",
              "Os subfibulare",
              "Multiple accessory ossicles",
            ]}
          />
          <Dropdown
            label="Subcutaneous edema"
            value={subcutEdema}
            setValue={setSubcutEdema}
            options={["None", "Mild", "Moderate", "Severe"]}
          />
          <Dropdown
            label="Infection pattern"
            value={infectionStatus}
            setValue={setInfectionStatus}
            options={[
              "None",
              "Cellulitis",
              "Possible osteomyelitis",
              "Definite osteomyelitis",
              "Abscess",
            ]}
          />
          <Dropdown
            label="Post-operative status"
            value={postOpStatus}
            setValue={setPostOpStatus}
            options={[
              "No prior surgery",
              "Hardware in situ, satisfactory",
              "Hardware in situ, possible loosening",
              "Post-operative soft tissue changes",
            ]}
          />
        </div>
      </SectionCard>
    </>
  );

  const renderSpineForm = () => (
    <>
      <SectionCard title="Spine – Global Parameters">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Region"
            value={spineRegion}
            setValue={setSpineRegion}
            options={["Cervical", "Thoracic", "Lumbar", "Whole spine"]}
          />
          <Dropdown
            label="Global alignment"
            value={spineAlignment}
            setValue={setSpineAlignment}
            options={[
              "Physiological",
              "Straightened",
              "Reversed lordosis",
              "Kyphotic deformity",
              "Scoliosis",
            ]}
          />
          <Dropdown
            label="Sagittal balance"
            value={spineLordosis}
            setValue={setSpineLordosis}
            options={[
              "Normal lordosis/kyphosis",
              "Loss of lordosis",
              "Hyperlordosis",
              "Hyperkyphosis",
            ]}
          />
          <Dropdown
            label="Cord/cauda signal"
            value={spineCordSignal}
            setValue={setSpineCordSignal}
            options={[
              "Normal",
              "Myelomalacia",
              "T2 hyperintensity (myelitis/ischemia)",
              "Syrinx",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Spine – Stenosis & Degeneration">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Canal stenosis (worst level)"
            value={spineCanalStenosis}
            setValue={setSpineCanalStenosis}
            options={[
              "None",
              "Mild",
              "Moderate",
              "Severe",
              "Critical with cord compression",
            ]}
          />
          <Dropdown
            label="Foraminal stenosis (global)"
            value={spineForaminalStenosis}
            setValue={setSpineForaminalStenosis}
            options={[
              "None",
              "Unilateral mild",
              "Bilateral mild",
              "Unilateral severe",
              "Bilateral severe",
            ]}
          />
          <Dropdown
            label="Disc degeneration (Pfirrmann)"
            value={spinePfirrmann}
            setValue={setSpinePfirrmann}
            options={[
              "Mostly grade I–II",
              "Multi-level grade III",
              "Multi-level grade IV",
              "Severe multi-level grade V",
            ]}
          />
          <Dropdown
            label="Endplate changes (Modic)"
            value={spineModic}
            setValue={setSpineModic}
            options={[
              "None",
              "Modic I (edematous)",
              "Modic II (fatty)",
              "Modic III (sclerotic)",
              "Mixed types",
            ]}
          />
          <Dropdown
            label="Spondylolisthesis"
            value={spineSpondy}
            setValue={setSpineSpondy}
            options={[
              "None",
              "Grade I anterior",
              "Grade II anterior",
              "High-grade (>Grade II)",
              "Retrolisthesis",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Level-wise Summary (High Detail)">
        <TextArea
          label="Level-wise findings"
          value={spineLevelSummary}
          setValue={setSpineLevelSummary}
          placeholder={
            "Example:\nC3–4: small central disc protrusion, no significant canal stenosis.\nC5–6: broad-based disc osteophyte complex causing mild canal stenosis and moderate right foraminal narrowing...\nL4–5: large central/paracentral extrusion with severe canal stenosis and bilateral recess narrowing..."
          }
        />
      </SectionCard>
    </>
  );

  const renderKneeForm = () => (
    <>
      <SectionCard title="Knee – Global & Menisci">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Side"
            value={kneeSide}
            setValue={setKneeSide}
            options={["Right", "Left"]}
          />
          <Dropdown
            label="Menisci"
            value={kneeMenisci}
            setValue={setKneeMenisci}
            options={[
              "Normal medial and lateral menisci",
              "Medial meniscus tear",
              "Lateral meniscus tear",
              "Complex/degenerative tears",
              "Root tear suspected",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Knee – Ligaments">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="ACL"
            value={kneeACL}
            setValue={setKneeACL}
            options={[
              "Normal",
              "Sprain / mucoid degeneration",
              "Partial tear",
              "Complete tear",
              "Chronic deficient",
            ]}
          />
          <Dropdown
            label="PCL"
            value={kneePCL}
            setValue={setKneePCL}
            options={["Normal", "Sprain", "Partial tear", "Complete tear"]}
          />
          <Dropdown
            label="MCL"
            value={kneeMCL}
            setValue={setKneeMCL}
            options={[
              "Normal",
              "Grade I sprain",
              "Grade II partial tear",
              "Grade III complete tear",
            ]}
          />
          <Dropdown
            label="LCL / PLC"
            value={kneeLCL}
            setValue={setKneeLCL}
            options={[
              "Normal",
              "LCL sprain / partial tear",
              "PLC injury",
              "High-grade/posterior corner insufficiency",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Knee – Cartilage, Effusion, Bone">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Articular cartilage (overall)"
            value={kneeCartilage}
            setValue={setKneeCartilage}
            options={[
              "Preserved",
              "Mild chondral changes",
              "Moderate chondropathy in one compartment",
              "Multi-compartment high-grade chondral loss",
            ]}
          />
          <Dropdown
            label="Joint effusion"
            value={kneeEffusion}
            setValue={setKneeEffusion}
            options={effusionOptions}
          />
          <Dropdown
            label="Bone marrow"
            value={kneeBoneMarrow}
            setValue={setKneeBoneMarrow}
            options={[
              "No significant bone marrow edema",
              "Contusions",
              "Subchondral insufficiency fracture suspected",
              "Diffuse marrow signal abnormality",
            ]}
          />
          <Dropdown
            label="Patellofemoral alignment"
            value={kneePatella}
            setValue={setKneePatella}
            options={[
              "Normal",
              "Lateral tilt",
              "Lateral subluxation",
              "Trochlear dysplasia features",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Knee – Additional Notes (High Detail)">
        <TextArea
          label="Compartmental cartilage/meniscus/ligament notes"
          value={kneeSummary}
          setValue={setKneeSummary}
          placeholder={
            "Example:\nMedial compartment: complex posterior horn medial meniscus tear, high-grade cartilage loss.\nLateral compartment: mild chondropathy, lateral meniscus intact.\nPatellofemoral: focal trochlear cartilage thinning..."
          }
        />
      </SectionCard>
    </>
  );

  const renderShoulderForm = () => (
    <>
      <SectionCard title="Shoulder – Rotator Cuff & Global">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Side"
            value={shoulderSide}
            setValue={setShoulderSide}
            options={["Right", "Left"]}
          />
          <Dropdown
            label="Rotator cuff tendons"
            value={shoulderRC}
            setValue={setShoulderRC}
            options={[
              "Intact",
              "Tendinosis",
              "Partial-thickness tear",
              "Full-thickness tear",
              "Massive cuff tear",
            ]}
          />
          <Dropdown
            label="Long head biceps"
            value={shoulderBiceps}
            setValue={setShoulderBiceps}
            options={[
              "Normal in groove",
              "Tendinosis",
              "Subluxed/dislocated",
              "Partial tear",
              "Complete rupture",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Shoulder – Labrum, Joints, Instability">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Labrum"
            value={shoulderLabrum}
            setValue={setShoulderLabrum}
            options={[
              "Normal",
              "SLAP lesion",
              "Bankart lesion",
              "Posterior labral tear",
              "Circumferential labral pathology",
            ]}
          />
          <Dropdown
            label="AC joint"
            value={shoulderAC}
            setValue={setShoulderAC}
            options={[
              "Normal",
              "Mild degenerative change",
              "Moderate degenerative change",
              "Severe degenerative change",
            ]}
          />
          <Dropdown
            label="Glenohumeral joint"
            value={shoulderGH}
            setValue={setShoulderGH}
            options={[
              "Normal",
              "Synovitis/effusion",
              "Chondral loss / osteoarthritis",
              "Post-instability changes",
            ]}
          />
          <Dropdown
            label="Instability lesions (Hill-Sachs/glenoid)"
            value={shoulderInstability}
            setValue={setShoulderInstability}
            options={[
              "None",
              "Hill-Sachs lesion",
              "Bony Bankart",
              "Engaging Hill-Sachs + glenoid bone loss",
            ]}
          />
        </div>
      </SectionCard>

      <SectionCard title="Shoulder – Atrophy / Extra Details">
        <div className="grid md:grid-cols-2 gap-4">
          <Dropdown
            label="Muscle atrophy / Goutallier/Patte"
            value={shoulderAtrophy}
            setValue={setShoulderAtrophy}
            options={[
              "No significant fatty atrophy",
              "Mild fatty infiltration",
              "Moderate fatty atrophy",
              "Severe fatty atrophy (surgical concern)",
            ]}
          />
        </div>
        <TextArea
          label="Additional detailed shoulder notes"
          value={shoulderSummary}
          setValue={setShoulderSummary}
          placeholder={
            "Example:\nSupraspinatus: full-thickness tear with 1.5 cm retraction.\nInfraspinatus: tendinosis.\nSubscapularis: partial articular-sided tear.\nLabrum: anteroinferior Bankart lesion."
          }
        />
      </SectionCard>
    </>
  );

  const renderStudyForm = () => {
    switch (study) {
      case "Spine":
        return renderSpineForm();
      case "Knee":
        return renderKneeForm();
      case "Shoulder":
        return renderShoulderForm();
      case "Ankle":
      default:
        return renderAnkleForm();
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
          {/* Header / About */}
          <div className="mb-5 rounded-3xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-2xl px-4 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[10px] md:text-xs font-medium text-purple-100">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live MRI Reporting Workspace
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-50">
                MRI Multi-Study Reporting App
              </h1>
              <p className="text-[11px] md:text-xs text-slate-300">
                Studies: Ankle · Spine · Knee · Shoulder · Version {APP_VERSION}
              </p>
              <p className="text-[11px] md:text-xs text-slate-400">
                Auto-updating via GitHub → Vercel. Use print to PDF for export;
                install as PWA for standalone use.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-1 py-1">
                {["Ankle", "Spine", "Knee", "Shoulder"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStudy(s)}
                    className={`px-3 py-1.5 text-[11px] md:text-xs rounded-full transition-all ${
                      study === s
                        ? "bg-purple-500 text-white shadow-md shadow-purple-500/40"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] md:text-xs text-slate-100 hover:bg-white/10 transition-all"
              >
                <span className="inline-block h-3 w-3 rounded-full bg-slate-200" />
                {darkMode ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>

          {/* Install banner */}
          {showInstallBanner && (
            <div className="mb-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-[11px] md:text-xs text-emerald-50 px-3 py-2 md:px-4 md:py-3 flex justify-between items-center shadow-glass backdrop-blur-xl">
              <span>
                Install this MRI app as a standalone PWA on this device for
                faster access.
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="px-3 py-1 rounded-full bg-emerald-500 text-xs text-white hover:bg-emerald-400"
                >
                  Install
                </button>
                <button
                  onClick={() => setShowInstallBanner(false)}
                  className="px-3 py-1 rounded-full border border-emerald-400 text-xs text-emerald-100 hover:bg-emerald-500/10"
                >
                  Later
                </button>
              </div>
            </div>
          )}

          {/* Main layout: form + report */}
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
            {/* Left: modality form */}
            <div>{renderStudyForm()}</div>

            {/* Right: Generated report + impression */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl p-4 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm md:text-base font-semibold text-slate-50">
                    Generated Report (Summary)
                  </h2>
                  <span className="text-[10px] md:text-[11px] text-slate-300">
                    Editable in PACS / RIS
                  </span>
                </div>
                <div className="mt-2 space-y-2 text-[11px] md:text-xs">
                  {study === "Ankle" && (
                    <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 whitespace-pre-wrap">
                      {`Patient: ${patientId || "-"}    Age/Sex: ${
                        ageSex || "-"
                      }
Side: ${side || "-"}    Indication: ${indication || "-"}

Bone marrow: ${boneMarrowStatus || "-"}
Talar OLT (Hepple): ${talarOltStage || "-"}

Tibiotalar effusion: ${tibiotalarEffusion || "-"}
Subtalar effusion: ${subtalarEffusion || "-"}
Tibiotalar cartilage: ${tibiotalarCartilage || "-"}

ATFL: ${atfl || "-"}
CFL: ${cfl || "-"}
PTFL: ${ptfl || "-"}
Deltoid superficial: ${deltoidSuperficial || "-"}
Deltoid deep: ${deltoidDeep || "-"}
Syndesmosis (AITFL): ${aitfl || "-"} (Grade ${
                        syndesmosisGrade || "-"
                      })

Spring ligament: ${springSmcnl || "-"}
Cervical ligament: ${cervicalLig || "-"}
ITCL: ${itclLig || "-"}
Bifurcate CN: ${bifurcateCn || "-"}    Bifurcate CC: ${
                        bifurcateCc || "-"
                      }

Tibialis posterior tendon: ${tpTendon || "-"}
Peroneus longus: ${peroneusLongus || "-"}
Peroneus brevis: ${peroneusBrevis || "-"}
Achilles: ${achillesStatus || "-"}

Plantar fascia: ${plantarFascia || "-"}
Heel fat pad: ${heelFatPad || "-"}
Hindfoot alignment: ${hindfootAlignment || "-"}    Arch: ${
                        archProfile || "-"
                      }

Tarsal tunnel nerve: ${tibialNerve || "-"}    Lesion: ${
                        tarsalTunnelLesion || "-"
                      }

Coalition: ${coalitionType || "-"}    Accessory ossicles: ${
                        accessoryOssicles || "-"
                      }

Subcutaneous edema: ${subcutEdema || "-"}
Infection: ${infectionStatus || "-"}
Post-op: ${postOpStatus || "-"}
`}
                    </div>
                  )}

                  {study === "Spine" && (
                    <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 whitespace-pre-wrap">
                      {spineImpressionText}
                    </div>
                  )}

                  {study === "Knee" && (
                    <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 whitespace-pre-wrap">
                      {kneeImpressionText}
                    </div>
                  )}

                  {study === "Shoulder" && (
                    <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 whitespace-pre-wrap">
                      {shoulderImpressionText}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 shadow-glass backdrop-blur-xl p-4 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm md:text-base font-semibold text-slate-50">
                    Final Impression
                  </h2>
                  <span className="text-[10px] md:text-[11px] text-purple-100">
                    High-yield summary
                  </span>
                </div>
                <div className="rounded-xl border border-purple-400/40 bg-black/20 px-3 py-2 text-[11px] md:text-xs whitespace-pre-wrap text-purple-50">
                  {impressionText}
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] md:text-xs font-semibold text-white shadow-md shadow-emerald-500/50 hover:bg-emerald-400 transition-all"
                  >
                    Export as PDF (Print)
                  </button>
                </div>
              </div>

              <div className="text-[10px] md:text-[11px] text-center text-slate-500 mt-2">
                © {new Date().getFullYear()} – MRI Multi-Study Reporting Toolkit
                · push to GitHub → auto-update via Vercel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
