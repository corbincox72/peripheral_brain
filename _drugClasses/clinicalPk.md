---
title: Clinical PK
author: Corbin Cox
layout: diseases
last-updated: 2018-12-03
created: 2018-12-03
toc: true
common: true
---

# Formulas [^dipiro]


## General PK

$$\begin{aligned}
​    k &= \frac{\ln{2}}{t_{1/2}}\\
​    C_{ss} &= \frac{F(D/\tau)}{CL}\\
​    E &= \frac{f_{unbound}CL_{int}}{Q+f_{unbound}CL_{int}}\\
​    CL &= Q \times E\\
​    V_d &= V_{blood} + \frac{f_b}{f_t}V_{tissue}\\
​    F &= \frac{\text{AUC}_{PO}}{\text{Dose}_{PO}} \div \frac{\text{AUC}_{IV}}{\text{Dose}_{IV}} = \frac{D_{IV}\text{AUC}_{PO}}{D_{PO}\text{AUC}_{IV}}
​    \end{aligned}$$

## 1-Compartment Model

$$\begin{aligned}
​    \tau_{est} &= \frac{\ln{(C_{max}} / C_{min})}{k} + t_{inf}\\
​    MD_{est} &= \frac{C_{max} t_{inf} V k \left( 1 - e^{-k\tau} \right)}{\left( 1 - e^{-kt_{inf}} \right)}\\
​    V &= \frac{MD \left( 1 - e^{-kt_{inf}} \right)}{t_{inf}k\left( C_{max} - C_{min}e^{-kt_{inf}} \right)} \\
​    C_{max} &= \frac{MD \left( 1 - e^{-kt_{inf}} \right)}{t_{inf} V k \left( 1 - e^{-k\tau} \right)}\\
​    C_{pk} &= C_{max} e^{-k(t_{pk} - t_{max})}\\
​    C_{min} &=  C_{max} e^{-k(\tau - t_{inf})}\\
​    C_{min} &= C_{trough} e^{-k(t_{min} - t_{trough})}\\
​    C[b] &= C[a] e^{-k (a - b)}
​    \end{aligned}$$

# Vancomycin [^dipiro]<sup>, </sup>[^rybak2009]<sup>, </sup>[^matzkel1984]<sup>, </sup>[^deryke2009] 

**Peak:** 20-40 mg/L

**Trough:** 10-15 mg/L (minor infections) or 15-20 mg/L (serious infections or lung penetration)

**Loading Dose:** 25-30 mg/kg (Wt)

**NTE 15 mg/min**

k &asymp; 0.00083 &times; CrCl + 0.0044

V<sub>d</sub> &asymp; 0.4-1 L/kg, usually 0.6-0.7 L/kg

$$\text{AUC}_{0-24\text{hr}}/\text{MIC} \ge 400$$ for appropriate effect

$$\text{AUC}_{0-24\text{hr}}/\text{MIC} \le 700$$ to prevent toxicity

$$\text{AUC}_{0-\tau} = \frac{C_{max}+C_{min}}{2}t_{inf} + \frac{(C_{max}-C_{min})(\tau-t_{inf})}{\ln(C_{max}/C_{min})}$$

$$\text{AUC}_{0-24\text{hr}} = \text{AUC}_{0-\tau} \frac{24}{\tau}$$

[Initial Vanc Dosing Calculator](https://globalrph.com/medcalcs/aminoglycosides-and-vancomycin-original-calculator/)

[Level-Based Vanc Dosing Calculator](https://globalrph.com/medcalcs/vanco-single-advanced/)

# Aminoglycosides [^dipiro]<sup>, </sup>[^nicolau1995]

See also: [Stanford Aminoglycoside Dosing Guidelines](http://med.stanford.edu/bugsanddrugs/dosing-protocols/_jcr_content/main/panel_builder/panel_0/download_2/file.res/Aminoglycoside%20Dosing%20Guide%202017-08-23.pdf)

k &asymp; 0.00293 &times; CrCl + 0.014
V<sub>d</sub> &asymp; 0.26 L/kg &times; Wt
V<sub>d</sub> may be closer to 0.3-0.35 L/kg in critically ill pts due to fluid overload
Use ABW if Wt/IBW &gt; 130%

## Traditional Dosing

Gentamicin / Tobramycin Target Levels [^dipiro]<sup>, </sup>[^lexi]
{: .caption}

|**Infection**|**Target Peak (mcg/mL)**|**Target Trough (mcg/mL)**|
|---|---|---|
|General| 4-10| le; 1|
|UTI|  &lt; 5|&le; 1|
|Bacteremia| &gt; 5|&le; 1|
|Pneumonia|  &gt; 6|&le; 1|
|Endocarditis from *P. aeruginosa* |&gt; 12|&le; 1|

Amikacin Target Levels  [^dipiro]<sup>, </sup>[^lexi]
{: .caption}

|**Infection**|**Target Peak (mcg/mL)** |**Target Trough (mcg/mL)**|
|---|---|---|
|General|15-30|4-10|
|UTI|&gt; 15|4-10|
|Bacteremia|&gt; 20|4-10|
|Pneumonia /Serious Infections|&gt; 24|4-10|

Target C<sub>pk</sub> / MIC &gt; 10 for efficacy
Draw levels 1hr after infusion ends
Consider target troughs of &le; 1.5-2 (tob/gent) or &le; 10 (amikacin)
for life-threatening infections. Look up specific trough/peak targets
for given infection site.

[Initial Aminoglycoside Dosing Calculator](https://globalrph.com/medcalcs/aminoglycosides-and-vancomycin-original-calculator/)

## Extended-Interval Dosing

1. Load with 7 mg/kg (15 mg/kg Amikacin)
2. Determine initial dosing frequency from table below
3. Draw level at 6-14hr after 1st or 2nd dose
4. Plot level on Hartford Nomogram (divide level by 2 for Amikacin)
    -   If doses other than those above are used, multiplying the level by (expected)/(given) dose can help adjust properly for the nomogram, although this has less evidence 
5. Adjust interval per nomogram
6. If borderline, go with longer interval

Initial Aminoglycocide Interval
{: .caption}



|CrCl|Interval|
|---|---|
|&ge; 60|  Q24H|
|40-59|Q36H|
|20-39|Q48H|
|&lt; 20|Monitor Serial Conc. & Admin when &lt; 1 mcg/mL|



# References

[^dipiro]: DiPiro JT, ed. *Pharmacotherapy: A Pathophysiologic Approach*. Tenth edition. New York: McGraw-Hill Education; 2017.
[^rybak2009]: Rybak M, Lomaestro B, Rotschafer JC, et al. Therapeutic monitoring of vancomycin in adult patients: A consensus review of the American Society of Health-System Pharmacists, the Infectious Diseases Society of America, and the Society of Infectious Diseases Pharmacists. *American Journal of Health-System Pharmacy*. 2009;66(1):82-98. doi:[10.2146/ajhp080434](https://doi.org/10.2146/ajhp080434)
[^matzkel1984]: Matzke GR, McGory RW, Halstenson CE, Keane WF. Pharmacokinetics of vancomycin in patients with various degrees of renal function. *Antimicrobial Agents and Chemotherapy*. 1984;25(4):433-437. doi:[10.1128/AAC.25.4.433](https://doi.org/10.1128/AAC.25.4.433)
[^deryke2009]: Deryke CA, Alexander DP. Optimizing Vancomycin Dosing through Pharmacodynamic Assessment Targeting Area under the Concentration-Time Curve/Minimum Inhibitory Concentration. *Hospital Pharmacy*. 2009;44(9):751-765. doi:[10.1310/hpj4409-751](https://doi.org/10.1310/hpj4409-751)]
[^nicolau1995]: Nicolau DP, Freeman CD, Belliveau PP, Nightingale CH, Ross JW, Quintiliani R. Experience with a once-daily aminoglycoside program administered to 2,184 adult patients. *Antimicrobial Agents and Chemotherapy*. 1995;39(3):650-655. doi:[10.1128/AAC.39.3.650](https://doi.org/10.1128/AAC.39.3.650)
[^lexi]: Lexi-Drugs. Lexicomp. Wolters Kluwer Health, Inc. Riverwoods, IL. Available at: http://online.lexi.com.


