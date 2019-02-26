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
\text{NBW} = \text{IBW} + 0.25(Wt-\text{IBW})\\
\text{AdjBW} = \text{IBW} + 0.4(Wt-\text{IBW})\\
\text{BSA}\; (m^2) = \sqrt \frac{\text{mass} \; (kg) * \text{height}\; (cm)}{3600}\\
\text{LBW}_\text{M} = \frac{9270\times \text{Wt}}{216\times \text{BMI} + 6680}\\
\text{LBW}_\text{F} = \frac{9270\times \text{Wt}}{244\times \text{BMI} + 8780}
$$

For CrCL, use Wt if Wt &lt; IBW, LBW if BMI &ge;  40, IBW or AdjBW otherwise

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
\text{INR} = \left(  \frac{\text{PT}_\text{test}}{\text{PT}_\text{normal}} \right)^\text{ISI}
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
E = \frac{f_\text{unbound}CL_\text{int}}{Q+f_\text{unbound}CL_\text{int}}\\
CL = Q \times E\\
CL = k \times V_d\\
V_d = V_\text{blood} + \frac{f_b}{f_t}V_\text{tissue}\\
F = \frac{\text{AUC}_\text{PO}}{\text{Dose}_\text{PO}} \div \frac{\text{AUC}_\text{IV}}{\text{Dose}_\text{IV}} = \frac{D_\text{IV}\text{AUC}_\text{PO}}{D_\text{PO}\text{AUC}_\text{IV}}
$$

## 1-Compartment Model

$$
\tau_\text{est} = \frac{\ln{(C_\text{max}} / C_\text{min})}{k} + t_\text{inf}\\
MD_\text{est} = \frac{C_\text{max} t_\text{inf} V k \left( 1 - e^{-k\tau} \right)}{\left( 1 - e^{-kt_\text{inf}} \right)}\\
V = \frac{MD \left( 1 - e^{-kt_\text{inf}} \right)}{t_\text{inf}k\left( C_\text{max} - C_\text{min}e^{-kt_\text{inf}} \right)} \\
C_\text{max} = \frac{MD \left( 1 - e^{-kt_\text{inf}} \right)}{t_\text{inf} V k \left( 1 - e^{-k\tau} \right)}\\
C_\text{pk} = C_\text{max} e^{-k(t_\text{pk} - t_\text{max})}\\
C_\text{min} =  C_\text{max} e^{-k(\tau - t_\text{inf})}\\
C_\text{min} = C_\text{tr} e^{-k(t_\text{min} - t_\text{tr})}\\
C[b] = C[a] e^{-k (a - b)}
$$

