import { nintiesUi } from "../project-data/90-s-ui";
import { axForEmployers } from "../project-data/ax-for-employers";
import { axtionable } from "../project-data/axtionable";
import { crystalPeak } from "../project-data/crystal-peak";
import { h4bS3 } from "../project-data/h4b-s3";
import { h4bS4 } from "../project-data/h4b-s4";
import { h4bS4Graphics } from "../project-data/h4b-s4-graphics";
import { liquidGlassSongPlayerUi } from "../project-data/liquid-glass-song-player";
import { pixelArtOne } from "../project-data/pixel-art-1";
import { portfolioAlex } from "../project-data/portfolio-alex";
import { portfolioHimesh } from "../project-data/portfolio-himesh-mehta";
import { portfolioRabi } from "../project-data/portfolio-rabi";
import { portfolioSharonLara } from "../project-data/portfolio-sharon-lara";
import { posters } from "../project-data/posters";
import { sidebarGlassUi } from "../project-data/sidebar-glass-ui";
import { smmGurshan } from "../project-data/smm-gurshaan";
import { sparkit } from "../project-data/sparkit";
import { weatherCardWidgets } from "../project-data/weather-card-widgets";

export type PageLinkType = 'axtionable' | 'ax-for-employers' | 'portfolio-alex' | 'portfolio-sharon-lara' | 'weather-card-widgets' | 'liquid-glass-song-player' | 'h4b-s3' | 'h4b-s4' | 'h4b-s4-graphics' | 'sparkit' | 'sidebar-glass-ui' | 'posters' | 'pixel-art-1' | '90-s-ui' | 'smm-gurshaan' | 'portfolio-rabi' | 'portfolio-himesh-mehta' | 'crystal-peak'


export type Project = {
  name: string;
  pageLink: PageLinkType;
  tags: string[];
  thumbnail: string;
  lottieData?: object;
  lottieUrl?: string;
  videoUrl?: string;
  date: string;
  description: string;
  clientProject: boolean;
  cost?: string;
  turnaround?: string;
  clientCameFrom?: string;
  designTeam?: string;
  projectImageUrls: string[];
  moreProjectPreviews: PageLinkType[];
}

export const showcaseProject: Project[] = [
  axtionable,
  portfolioAlex,
  axForEmployers,
  portfolioSharonLara,
  weatherCardWidgets,
  liquidGlassSongPlayerUi,
  nintiesUi,
  crystalPeak,
  h4bS3,
  h4bS4,
  h4bS4Graphics,
  pixelArtOne,
  portfolioHimesh,
  portfolioRabi,
  posters,
  sidebarGlassUi,
  smmGurshan,
  sparkit,
];

