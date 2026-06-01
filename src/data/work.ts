import parama from "../assets/img/company/parama.png";
import tsmtegal from "../assets/img/company/tsmtegal.png";
import eskrim from "../assets/img/company/eskrim.png";

export type Work = {
  id: string;
  period: string;
  position: string;
  company: string;
  description: string[];
  image: string;
};
export const workData: Work[] = [
  {
    id: "parama",
    period: "May 2024 - Present",
    position: "Warehouse Picker",
    company: "PT. Parama Global Inspira",
    description: [
      "Picked and prepared products accurately based on customer and warehouse orders. ",
      "Checked item quantities and product conditions before shipment. ",
      "Organized picked items for packing and delivery processes. ",
      "Maintained warehouse cleanliness and followed operational procedures. ",
    ],
    image: parama,
  },

  {
    id: "tsmtegal",
    period: "Jun 2023 - Present",
    position: "Daily Worker",
    company: "Trans Studio Mini Tegal",
    description: [
      "Maintain the game rides. ",
      "Serve customers who want to play. ",
      "Be friendly to customers. ",
      "Handle customer complaints. ",
    ],
    image: tsmtegal,
  },

  {
    id: "eskrim",
    period: "Aug 2022 - Nov 2022",
    position: "Merchandiser Display",
    company: "PT. Dingxin Boga Indonesia",
    description: [
      "Sells more than 100 boxes of ice cream products per day. ",
      "Check out the ice cream products on display. ",
      "Organize sales layout. ",
      "Offers an ice cream promo program to customers. ",
      "Resolve problems that occur to customers.",
    ],
    image: eskrim,
  },
];
