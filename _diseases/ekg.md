---
title: EKG Interpretation
layout: diseases
author: Corbin Cox
last-updated: 2019-03-21
created: 2019-03-21
toc: true
common: false
---

![EKG Layout]({{ site.baseurl }}/images/ekgLayout.png)

# Axis

* -30 to 90 is normal
* Determine Axis
  * Look at I, II, and aVL QRS
  * I up &rArr; Right of vertical axis
  * II up &rArr; Between -30 and 150
  * aVF up &rArr; Below horizontal axis

|                                                   | Axis Direction | Interpretation         |
| ------------------------------------------------- | -------------- | ---------------------- |
| I: &uarr; <br />II: &uarr;&darr;<br />aVF: &uarr; | 0 - 90         | Normal                 |
| I: &uarr; <br />II: &uarr;<br />aVF: &darr;       | -30 - 0        | Small LAD              |
| I: &uarr; <br />II: &darr;<br />aVF: &darr;       | -90 - -30      | LAD                    |
| I: &darr; <br />II: &uarr;<br />aVF: &uarr;       | 90-150         | RAD                    |
| I: &darr; <br />II: &darr;<br />aVF: &uarr;       | 150 - 180      | RAD                    |
| I: &darr; <br />II: &darr;<br />aVF: &darr;       | -180 - -90     | Extreme Axis Deviation |

# Rhythm Analysis[^bmjEKG]

* Normal Rate: 60-100
* Normal P-wave: &lt; 0.12s
  * Often biphasic in V1
  * Slight notch in precordial leads is normal
  * Notch w/ peak-peak interval &gt; 1mm (0.04s) is usually pathological
* Normal PR Interval: 0.12-0.2s
* Normal QRS-complex: &lt; 0.1s
  * Non-pathological "septal" Q waves often present in I, aVL, V5, V6
    * Septal Q waves should be &lt; 2 small squares deep and &lt; 25% of R-wave amplitude
* Normal QTc: &lt; 0.5s
  * Shortcut: If T wave is at or past halfway between the preceding and next QRS complex w/o tachycardia, it is likely prolonged
  * QTc = $\text{QT}/\sqrt{\text{R-R interval (s)}}$
* Normal T Wave
  * Inversion in V1 normal, sometimes in V2

## AV Conduction Delays

* 1st Degree HB
  * PR interval &gt; 0.2s
* 2nd Degree HB
  * Mobitz Type I (Wenckebach): PR progressively lengthens until QRS is dropped, then returns to normal
  * Mobitz Type II: Intermittent failure, usually in a fixed ration, but PR interval does not change
* 3rd Degree HB
  * No correlation between P and QRS, but both can still occur, QRS can be narrow if AV node is firing, or wide if ventricles are pacing

## Bundle Branch Blocks

* RBBB
  * QRS &ge; 0.12s
  * R' in V1 or V2 (looks like a big M)
  * Slurred S wave in I, V5, and V6
  * Optional: ST depression and T wave inversion in right precordial leads
* LBBB
  * QRS &gt; 0.12s
  * Broad, monophonic R wave in I, V5, and V6
  * No Q wave in V5 or V6
  * Optional: ST-T displacement discordant to QRS complex
  * Optional: Poor R-wave progression
  * Optional: RS Complex instead of monophonic complex in V5 and V6
  * Optional: Left Axis Deviation (common, but not required)
* Fascicular Block
  * Anterior Block: Axis &lt; -30
  * Posterior Block: Axis &gt; 90
  * Bifasicular (RBBB and LA or LPBBB): RBBB and LABBB is more common, variable axis, but deviated
  * Trifasicular Block: Bifasicular + 1st Degree block => Complete heart block

## Bradycardias

* Sick Sinus Syndrome
  * Rate &lt; 60, treat only if SSx
* SA Block vs SA Arrest
  * SA block: Pause length is a multiple of normal P-P interval
  * SA Arrest: Pause is not a multiple of normal P-P interval

## Atrial Tachycardias

* Sinus Tach
  * Normal morphology and rate &gt; 100, rarely exceeds 200 BPM
* Afib
  * 350-600 BPM atrial rate
  * 100-180 BPM ventricle rate
* Aflutter
  * 300 BPM atrial rate, morphologically distinct, unlike afib
  * Ventricles usually conducted 2:1, so rate is usually 150 BPM
* Atrial Tach
  * Ectopic atrial pulses of 150-250 BPM, notably P waves are abnormal compared to sinus tach
  * Usually 1:1 conduction
* Atrial tach w/ AV block is commonly seen w/ digoxin toxicity

## Junctional Tachycardias

* Normal QRS morphology w/o accessory pathways (WPW)
* AVNRT
  * Re-entry is in the node, leads to rapid ventricular rate with normal or absent P waves, and normal, regular QRS complexes
  * P-waves can occur at the end of the QRS (backwards conduction), leading to pseudo-S waves or pseudo-R waves depending on lead
* AVRT / WPW
  * Occur due to accessory pathway
  * WPW is prototypical, and can be conducted "prodromic" (normal direction) or "antidromic" (backwards)
    * Orthodromic divided into two types: A and B
    * Type A: Large R wave in all leads, may be RR' in V1, can resemble RBBB, RVH, or posterior MI
    * Type B: Large S in V1-3 and r in V4-V6, can resemble LBBB and anterior MI
  * Antidromic AVRTs have wide complexes, abnormal looking rhythm
  * Afib and WPW Can resemble vtach, w/ irregular broad complexes and the occasional narrow complex when conducted appropriately

## Wide-Complex Tachycardias

* Changes in axis +/- 40 degree when arrhythmia arises &rArr; ventricular arrhythmia
* Vtach vs SVT w/ BBB
  * RBBB Morphology: Ventricular if QRS &gt; 0.14s, Axis deviation, QS wave or negative complex in V6, concordance throughout chest leads, R or biphasic R in V1
  * LBBB Morphology: Venctricular if axis deviation, QRS &gr; 0.16s, QD w/ negative complex in V6, concordance through chest leads, rS in V1

#Ischemia / Infarct

#Hypertrophy

# Reference

{% include sources.md %}