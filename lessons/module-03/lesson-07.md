---
id: "03.7"
module: 3
minutes: 22
practice_minutes: 120
prerequisites: ["03.2", "03.4", "03.6"]
objectives:
  - Decide which casualties actually benefit from oxygen when supply is limited, using the TCCC list.
  - Calculate how long a cylinder will last at a given flow, and run a home oxygen concentrator safely during a power cut.
  - Read a pulse oximeter critically, knowing when it reads falsely low, falsely high or not at all.
  - Complete the Module 3 scenario - needle decompression on ribs, cric on a larynx, and timed airway decisions - to the stated standard.
volatility: implementation
sources:
  - title: "TCCC Guidelines, 01 May 2026, Tactical Field Care 5c-5e and TACEVAC 4 (oxygen indications)"
    url: https://learning-media.allogy.com/api/v1/pdf/18ccfdfc-a076-47e9-8a34-376efdd81b43/contents
  - title: "TCCC Combat Medic course, Module 7: oxygen and pulse oximetry slides"
    url: https://tccc.org.ua/files/downloads/module-7-airway-management-in-tfc-update-en.pdf
  - title: "US FDA. Pulse oximeters for medical purposes: non-clinical and clinical performance testing, labeling and premarket submission recommendations (draft guidance, January 2025)"
    url: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and
last_verified: "2026-11-14"
---

# 03.7 · Oxygen in the field and pulse oximetry

By the end of this lesson you will be able to decide who gets your limited oxygen, make a cylinder or a home concentrator last, read a pulse oximeter without being fooled by it, and then run the whole module as one practical scenario. You learned to give oxygen in your EMT course; here the question is what to do when there is very little of it and no one to resupply you.

> [!CAUTION]
> Performing these procedures on people without the required state certification is illegal.
> This lesson is for educational purposes only. Practise only on models and animal tissue.

## Why it matters

In an ambulance oxygen seems unlimited. In a safe room, a cut-off village or a casualty collection point, you may have one small cylinder or a home concentrator belonging to an elderly neighbour, and several casualties. TCCC says it plainly: **most combat casualties do not require supplemental oxygen**. Oxygen does not stop bleeding, does not fix a tension pneumothorax and does not open an airway. It helps specific casualties, and every litre given to someone who does not need it is a litre you do not have later.

The pulse oximeter is the tool that tells you who needs it, and it is easy to misread.

## What to do

### Who benefits (TCCC, evacuation phase)

Oxygen may be of benefit for:

- **Low oxygen saturation** on pulse oximetry
- **Injuries that impair oxygenation** (chest wounds, blast lung)
- **Unconscious** casualties
- **Traumatic brain injury**: keep SpO2 at **92% or more**
- **Shock**
- Casualties at **altitude**
- Known or suspected **smoke inhalation** (including carbon monoxide; see the pulse oximetry pitfalls below)

During Tactical Field Care, TCCC gives oxygen to casualties with moderate or severe TBI when available, and the TCCC course adds that when oxygen is available it can be started just before evacuation. The target for most casualties is **SpO2 90% or more**.

**Priorities when supply is short:** first fix what oxygen cannot (bleeding, airway, tension pneumothorax). Then give oxygen to the casualty with TBI below 92%, the casualty with chest injury and SpO2 below 90%, and the smoke-inhalation casualty. A casualty at 96% on room air does not need it; check again in 15 minutes.

### Flow and devices (recap)

| Device | Flow | Use |
|---|---|---|
| Nasal cannula | 1-6 L/min | Conscious casualty needing a little; the most economical |
| Simple face mask | 5-10 L/min | Moderate need |
| Non-rebreather mask with reservoir | 10-15 L/min | High need, smoke inhalation |
| BVM with reservoir | 10-15 L/min | Assisted ventilation (lesson 03.2) |

**Titrate down**: start at what the casualty needs, then turn the flow down step by step while SpO2 stays at target (90%, or 92% for TBI). The TCCC course notes that field oxygen generators often deliver about **3 L/min**; through a nasal cannula that still helps.

### How long will the cylinder last?

Most medical cylinders outside the US are labelled by **water capacity in litres** and filled to about **200 bar** (check yours). The amount of oxygen is roughly:

$$\text{litres of oxygen} \approx \text{cylinder water capacity (L)} \times \text{gauge pressure (bar)}$$

$$\text{minutes} \approx \frac{\text{litres of oxygen} - \text{reserve}}{\text{flow (L/min)}}$$

Example: a 2-litre cylinder showing 150 bar holds about 300 litres. Keep a reserve of about 20% (60 litres). At 15 L/min it lasts about 16 minutes; at 4 L/min by nasal cannula, about an hour. Read your own cylinder's label: if it gives the oxygen content directly, use that.

**Cylinder handling:** open the valve slowly; check the gauge every 15 minutes and write it on the flowsheet; never let the regulator touch oil, grease or hand cream (fire risk at high pressure); store and use cylinders upright and secured so they cannot fall.

### Home oxygen concentrators

A concentrator pulls in room air and removes nitrogen with sieve beds, delivering oxygen-enriched air (usually around 90% or more) at low flow. Most home units deliver up to **5 L/min**, some up to 10 L/min. Points that matter in an emergency:

- **They need mains power**, typically several hundred watts. In a power cut, run one only from a generator or an inverter rated well above the label wattage. **Never run a generator inside, in a stairwell or near the safe room vent**: carbon monoxide kills.
- **Portable concentrators** often deliver **pulse dose** (a puff when the user breathes in). They do not work with a BVM or for a casualty who is not breathing; you need a continuous-flow unit.
- They need **air around them** (keep them away from walls and curtains) and they enrich the room with oxygen over time.
- A neighbour's concentrator is that neighbour's lifeline; if you borrow it, you now have two people on one machine.

### Oxygen safety in a sealed room

Oxygen does not burn, but it makes everything else burn faster and hotter. In a small sealed safe room: **no smoking, candles, open flames or gas burners**; turn the oxygen off when not in use; and keep the room ventilated when the threat allows. Oxygen-soaked clothing and bedding stay flammable for some time after.

### Pulse oximetry: what it can and cannot tell you

Put it on early, on a warm finger without polish, and watch the **waveform or signal bar** as well as the number. TCCC course material lists the traps:

| Reading may be | When | What to do |
|---|---|---|
| **Low or absent** | **Shock** (poor perfusion), **cold** hands, shivering | Warm the hand, try another finger or the earlobe; a missing signal in shock is itself a sign of shock |
| **Unreliable** | **Nail polish**, **very bright light**, **motion** (litter, vehicle) | Remove polish or turn the probe sideways; shade the probe; read when still |
| **Falsely high** | **Carbon monoxide** (smoke inhalation, generators, fires): the oximeter cannot tell carbon monoxide from oxygen on haemoglobin | A normal reading after smoke exposure does not rule out poisoning; give high-flow oxygen anyway |
| **Less accurate** | **Darker skin pigmentation**: many oximeters overestimate saturation | The US FDA issued a safety communication in 2021 and draft guidance in January 2025 asking manufacturers to test across skin tones. Treat a borderline reading (90-93%) with suspicion |

Two more rules:

- **A good SpO2 does not mean the casualty is fine.** TCCC notes that **shock is not always preceded by a fall in oxygen saturation**. A bleeding casualty can read 98% until shortly before arrest. Use the radial pulse and mental status for shock.
- **Trend beats a single number.** A fall from 96% to 91% over 20 minutes in a chest-injured casualty is a warning (lesson 03.3), even though 91% is "above target".

### Watch

Chicago EMT Training on the EMT basics of the oxygen cylinder, regulator and key:

https://www.youtube.com/watch?v=BL5D5UasUHY

A medical equipment supplier introduces a common home oxygen concentrator (Philips Respironics EverFlo) and its controls:

https://www.youtube.com/watch?v=7M3tJBinUOE

Oxidation Tech explains how oxygen concentrators work inside:

https://www.youtube.com/watch?v=1fsdJuZFYc4

Medtronic, a sensor manufacturer, shows how to place pulse oximetry sensors correctly:

https://www.youtube.com/watch?v=rMtvJWT2vLE

## Improvise it

- **No oxygen at all:** this is the usual situation. Do what oxygen cannot: control bleeding, open and position the airway (03.1), decompress a tension pneumothorax (03.4), sit a breathless conscious casualty up, keep them calm and warm, and evacuate. For a casualty who must be ventilated, room air with a BVM or mouth-to-mask still gives about 21% oxygen, which is enough to keep many alive.
- **Stretching a small supply:** use a nasal cannula at the lowest flow that holds the target instead of a mask; turn it off between reassessments for casualties who hold their target without it; share by priority, not by order of arrival.
- **Improvised masks and reservoirs:** a plastic bag over the face or a bottle cut into a mask traps carbon dioxide and can suffocate. Do not use them.
- **Industrial (welding) oxygen:** not certified as medical gas, and its regulators deliver pressure, not a measured flow in litres per minute. This course does not recommend it.
- **No pulse oximeter:** trend the respiratory rate, effort, colour of lips and nail beds, mental status and radial pulse every 5-15 minutes on paper. Blue lips are a late sign.
- **Power for a concentrator:** a car with an inverter can run a small concentrator if the inverter is rated above the unit's label wattage, the engine is running, and the car is **outdoors** with the tubing run inside. Never run the car in a closed garage.

**How to tell it is failing:** the gauge falls faster than you calculated (leak at the regulator: listen and check the washer), the concentrator alarms (power or purity), SpO2 does not rise despite flow (wrong problem: check airway, tension, shock), or the casualty becomes drowsy despite good SpO2 (think CO2 retention, head injury or shock).

## When it goes wrong

- **Oxygen for everyone, then none for the TBI casualty an hour later.** Prioritise and titrate.
- **Trusting 98% in a pale, confused casualty.** The oximeter does not measure shock.
- **Trusting 100% after smoke exposure.** It may be carbon monoxide. Treat the history.
- **A generator in the stairwell or a closed room.** Its exhaust fills the building with carbon monoxide; keep generators outdoors.
- **Regulator fire.** Oil, grease or hand cream on the regulator or cylinder valve; keep them clean and dry.
- **Pulse-dose portable concentrator on an unconscious casualty.** It may not trigger. Use continuous flow or a cylinder.

## Scope and law

Oxygen therapy was part of your EMT course. Medical oxygen cylinders and concentrators are supplied for named patients or services; using a neighbour's home oxygen for another casualty in an emergency is a decision for that emergency, not a supply plan. Everything else in this module's scenario is above EMT scope; read [01.5 · The law and your scope in Israel](../module-01/lesson-05.md) before you train it.

## Practice

> [!WARNING]
> Needles and blades only on animal tissue over a table, with a sharps bottle. Landmark work on a partner uses fingers and a washable marker only.

### Module 3 scenario: the safe room after the barrage (2 hours)

**Setting:** a rocket hit near your building. Three casualties reach your shelter. Evacuation is at least 3 hours away; MDA cannot reach you; phone lines are down. You have a home kit with two 14G 3.25-inch decompression needles, a cric kit (scalpel, hook, bougie, 6.0 cuffed tube), an NPA, a BVM, a 2-litre oxygen cylinder at 150 bar with a nasal cannula and mask, a pulse oximeter, chest seals, suction (manual pump and a 60 ml syringe with tubing).

**What you need:** a partner to run the scenario and read the cards, a lamb or beef rib rack with meat and fat on, a balloon or glove, a lamb or calf trachea with larynx and a piece of chicken skin, the equipment from lessons 03.4 and 03.6 (or practice substitutes), a timer, a casualty card or paper flowsheet, a calculator.

**Station 1: needle decompression (40 minutes).** Casualty A: a man, 30, fragment wound in the right side of the chest, sealed. Your partner reads: "RR 36, right side silent, SpO2 84% falling, radial pulse weak."

1. Say your decision and what you do first (burp the seal).
2. Partner: "No change." Show both sites on your partner with a marker (5th intercostal space anterior axillary line, 2nd intercostal space midclavicular line), outside the nipple line.
3. On the ribs (balloon underneath): NDC 1 at the space you chose, all to the hub, 5-10 seconds, needle out, catheter taped. Time it.
4. Partner: "No improvement." NDC 2 at the other site, new needle.
5. Partner: "Better, SpO2 91%." Position and document. Ten minutes later partner: "Distress is back." Repeat at the same site, new needle.

**Station 2: surgical airway (40 minutes).** Casualty B: a woman, 45, lower face destroyed by a fragment, unconscious, blood pouring into the mouth. Recovery position and suction have failed; she is gurgling and SpO2 is falling.

1. Say why this meets the TCCC indication and what you tried first.
2. On a partner, do the laryngeal handshake and mark the membrane.
3. On the lamb larynx covered with chicken skin: bougie-aided cric, full sequence out loud, through to cuff inflated and "lung" ventilated. Time it.
4. Secure the tube and write the card entry.

**Station 3: airway and oxygen decisions (40 minutes).** Your partner reads each card; you have **30 seconds** to answer out loud: what you do, and why.

1. Casualty C, 70, smoke from the burning flat next door, coughing, hoarse, SpO2 99%.
2. Casualty A after decompression: SpO2 91% on room air. How much oxygen, by what device?
3. Casualty B after cric: SpO2 88%, you are ventilating with the BVM.
4. How long will your cylinder last at 15 L/min with a 20% reserve? At 4 L/min?
5. Casualty D, 25, thigh tourniquet, SpO2 97%, confused, weak radial pulse. Oxygen?
6. Casualty E, unconscious after a fall, snoring, clear fluid from the right ear. Adjunct?
7. Casualty F, 9 years old, burned face, struggling to breathe despite positioning. Surgical airway?
8. The power is out; a neighbour offers his home concentrator and a petrol generator. Where does the generator go?

**How you know it worked:**

- **Station 1:** you burped the seal first; your marks are outside the nipple line on top of the 3rd and 6th ribs; each needle went over the top of the lower rib to the hub (cut and check); you followed fail-other-site and recur-same-site with a new needle each time; each NDC took under 60 seconds from decision.
- **Station 2:** you named the failed simple measures; your cut was through the membrane (cut and check); the bougie clicked on the rings; the cuff held 10 ml; the "lung" inflated; under 90 seconds from decision to inflated cuff.
- **Station 3:** (1) high-flow oxygen by non-rebreather despite 99%, because CO makes the reading falsely high, and watch the airway for burns; (2) nasal cannula at the lowest flow that keeps SpO2 at 90% or more; (3) add oxygen to the BVM reservoir, and check tube position, breath sounds both sides and for tension; (4) about 300 L, 240 L usable: about 16 minutes at 15 L/min, about 60 minutes at 4 L/min; (5) her SpO2 is fine, her problem is shock: oxygen only if spare, priority is resuscitation; (6) no NPA, recovery position, OPA if no gag reflex; (7) no surgical cric under 10-12 years: BVM, oxygen, urgent evacuation; (8) outdoors, away from windows and the safe room vent, never indoors or in the stairwell.

Run the scenario again a week later with roles reversed. When you can complete all three stations to this standard, take the Module 3 quiz.

## Sources

- Committee on Tactical Combat Casualty Care. *TCCC Guidelines*, 01 May 2026: Tactical Field Care 5c-5e (pulse oximetry, TBI oxygen), TACEVAC 4 (oxygen indications).
- Joint TCCC course, Combat Medic/Corpsman Module 7: oxygen administration and pulse oximetry slides (flow about 3 L/min from generators; factors affecting readings; shock not always preceded by a fall in SpO2).
- US Food and Drug Administration. Pulse oximeters for medical purposes: draft guidance, January 2025; Safety Communication on pulse oximeter accuracy, February 2021.
