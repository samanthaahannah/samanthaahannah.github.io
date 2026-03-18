export type Paper = {
  readonly id: string;
  readonly title: string;
  readonly authors: string[];
  readonly etal: boolean;
  readonly venue: [string, string];
  readonly venuePlus?: string;
  readonly pages?: string;
  readonly link: string;
}

const papers: Paper[] = [
    {
      id: "paper-001-card",
      title: "NeFT‑Net: N‑window extend frequency transformer for rhythmic motion prediction",
      authors: ["A. Ademola", "D. Sinclair", "B. Koniaris"],
      etal: true,
      venue: ["Computers & Graphics,", "2025"],
      link: "doi: 10.1016/j.cag.2025.104244"
    },
    {
      id: "paper-002-card",
      title: "HoloJig: Interactive Spoken Prompt Specified Generative AI Environments",
      authors: ["L. Casas", "S. Hannah", "K. Mitchell"],
      etal: false,
      venue: ["IEEE Computer Graphics and Applications,", "2025"],
      link: "doi: 10.1109/MCG.2025.3553780"
    },
    {
      id: "paper-003-card",
      title: "Design Considerations of Voice Articulated Generative AI Virtual Reality Dance Environments",
      authors: ["L. Casas", "K. Mitchell", "M. Tamariz", "S. Hannah", "D. Sinclair", "B. Koniaris", "J. Kennedy"],
      etal: false,
      venue: ["Dancing in the Holodeck: Generative AI and the Future of Remote Collaboration (GenAI in UGC Workshop, CHI24),", "2024"],
      venuePlus: "ACM, ",
      link: "https://genai-in-ugc.github.io/pdf/HoloJigCHI24GenAIWorkshop%20-%20Kenny%20Mitchell.pdf"
    },
    {
      id: "paper-004-card",
      title: "MoodFlow: Orchestrating Conversations with Emotionally Intelligent Avatars",
      authors: ["L. Casas", "S. Hannah", "K. Mitchell"],
      etal: false,
      venue: ["IEEE Conference on Virtual Reality and 3D User Interfaces Workshops (VRW),", "2025"],
      pages: "86-89",
      link: "doi: 10.1109/MCG.2025.3553780"
    }
  ];

  export default papers;