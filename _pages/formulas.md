---
title: Formulas
author: Corbin Cox
permalink: /formulas
layout: diseases
last-updated: 2018-3-24
created: 2018-12-23
toc: true
common: false
---

# Dosing and Body Weights

$$
\text{CrCl} = \frac{(140-\text{age})\text{IBW}}{72*\text{SCr}}*0.85\; (\text{if female})\\
\text{IBW}_\text{M} = 50\;(kg)+2.3(Ht\; (in)-60\;(in))\\
\text{IBW}_\text{F} = 45.5\;(kg)+2.3(Ht\; (in)-60\;(in))\\
\text{NBW} = IBW + 0.25(Wt-\text{IBW})\\
\text{ABW} = IBW + 0.4(Wt-\text{IBW})\\
\text{BSA}\; (m^2) = \sqrt \frac{\text{mass} \; (kg) * \text{height}\; (cm)}{3600}
$$

# Acid-Base

$$
\text{Anion Gap} = [Na^+]-[Cl^-]-[{HCO}_3 ^-]\\
\text{Delta Gap} = \text{Anion Gap} - \text{Normal Anion Gap}
$$

# Nitrogen Balance

$$
\text{Intake}\; (g) = \frac{\text{24hr Protein Intake}\; (g)}{6.25}\\
\text{Outake}\; (g) = \text{24hr UUN}\; (g) + 4\;(g)
$$

# Fluids and Electrolytes

$$
\text{Osm} = 2[\text{Na}]+\frac{\text{BUN}}{2.8} + \frac{\text{BG}}{18} + \frac{\text{EtOH}\; (md/dL)}{3.7}\\
\text{Corrected}\; [Na^+] = [Na^+] + 1.6 \left[ \frac{BG}{100}-1 \right]\\
\text{TBW}_M = 0.6\; (L/kg) * Wt\\
\text{TBW}_F = 0.5\; (L/kg) * Wt\\
\text{Na Deficit} = TBW \left( [Na^+]_\text{goal}-[Na^+]_\text{plasma}  \right)\\
\text{FWD} = \text{TBW} \left(  \frac{[Na^+]}{140}-1 \right)\\
\text{Corrected}\; [Ca^{2+}] = [Ca^{2+}] + 0.8(4-\text{Albumin})\\
\Delta [Na] = \frac{[Na^+]_\text{fluid} - [Na^+]_\text{plasma}}{\text{TBW}+1}
$$

# Anticoagulation

$$
\text{INR} = \left(  \frac{\text{PT}_{test}}{\text{PT}_{normal}} \right)^\text{ISI}
$$

# EKG Interpretation

$$
QTc=\frac{QT}{\sqrt{60/HR}}
$$

# Pharmacokinetics 

## General PK

$$
C_{ss} = \frac{F(D/\tau)}{CL} \text{ (intermittent)}\\
C_{ss} = \frac{\text{Rate}}{CL} \text{ (infusions)}\\
E = \frac{f_{unbound}CL_{int}}{Q+f_{unbound}CL_{int}}\\
CL = Q \times E\\
CL = k \times V_d\\
V_d = V_{blood} + \frac{f_b}{f_t}V_{tissue}\\
F = \frac{\text{AUC}_{PO}}{\text{Dose}_{PO}} \div \frac{\text{AUC}_{IV}}{\text{Dose}_{IV}} = \frac{D_{IV}\text{AUC}_{PO}}{D_{PO}\text{AUC}_{IV}}
$$

## 1-Compartment Model

$$
\tau_{est} = \frac{\ln{(C_{max}} / C_{min})}{k} + t_{inf}\\
MD_{est} = \frac{C_{max} t_{inf} V k \left( 1 - e^{-k\tau} \right)}{\left( 1 - e^{-kt_{inf}} \right)}\\
V = \frac{MD \left( 1 - e^{-kt_{inf}} \right)}{t_{inf}k\left( C_{max} - C_{min}e^{-kt_{inf}} \right)} \\
C_{max} = \frac{MD \left( 1 - e^{-kt_{inf}} \right)}{t_{inf} V k \left( 1 - e^{-k\tau} \right)}\\
C_{pk} = C_{max} e^{-k(t_{pk} - t_{max})}\\
C_{min} =  C_{max} e^{-k(\tau - t_{inf})}\\
C_{min} = C_{trough} e^{-k(t_{min} - t_{trough})}\\
C[b] = C[a] e^{-k (a - b)}
$$
