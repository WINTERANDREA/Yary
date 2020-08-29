import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
  faAward,
  faUser,
  faSuitcaseRolling,
  faRoad,
  faCreditCard,
  faCar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const AwardIcon = makeFAIcon(faAward);
export const SeatIcon = makeFAIcon(faUser);
export const SuitcaseIcon = makeFAIcon(faSuitcaseRolling);
export const ArrowRight = makeFAIcon(faArrowRight);
export const RoadIcon = makeFAIcon(faRoad);
export const CreditcardIcon = makeFAIcon(faCreditCard);
export const CarIcon = makeFAIcon(faCar);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
