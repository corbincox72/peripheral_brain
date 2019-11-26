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

k &asymp; 0.0024 &times; CrCl + 0.01

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


Hartford Nomogram
{: .caption}



![Hartford Nomogram]({{ site.baseurl }}/images/hartfordNomogram.png)



Initial Aminoglycoside Interval
{: .caption}

|CrCl|Interval|
|---|---|
|&ge; 60|  Q24H|
|40-59|Q36H|
|20-39|Q48H|
|&lt; 20|Monitor Serial Conc. & Admin when &lt; 1 mcg/mL|



# References
{% include sources.md %}
