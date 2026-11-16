"use client";

import { useState } from "react";

const GREEN = "#14342B";
const CREAM = "#FAF5EA";

const questions = [
  {
    titre: "Combien de clients recevez-vous par semaine ?",
    options: [
      { label: "Moins de 20", value: 15 },
      { label: "Entre 20 et 40", value: 30 },
      { label: "Entre 40 et 60", value: 50 },
      { label: "Plus de 60", value: 70 },
    ],
  },
  {
    titre: "Quel est le prix moyen d'une prestation ?",
    options: [
      { label: "Moins de 20 €", value: 15 },
      { label: "Entre 20 et 35 €", value: 28 },
      { label: "Entre 35 et 50 €", value: 43 },
      { label: "Plus de 50 €", value: 60 },
    ],
  },
  {
    titre: "Sur 10 clients, combien ne reviennent jamais ?",
    options: [
      { label: "1 sur 10", value: 10 },
      { label: "2 sur 10", value: 20 
