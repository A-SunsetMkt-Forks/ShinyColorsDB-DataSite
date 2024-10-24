import { Idol } from "./idol";
import { CardIdolEvent } from "./cardidolevent";
import { CardMemoryAppeal } from "./cardmemoryappeal";
import { PanelSlot } from "./panelslot";
import { CardProduceAptitude } from "./cardproduceaptitude";
import { Card } from "./card";
import { MemoryChargeSkill } from "./memorychargeskill";

export interface PCard extends Card {
  idol: Idol;
  cardIdolEvents: CardIdolEvent[];
  cardMemoryAppeals: CardMemoryAppeal[];
  cardPanels: PanelSlot[];
  cardProduceAptitude: CardProduceAptitude[];
  memoryChargeSkills: MemoryChargeSkill[];
}
