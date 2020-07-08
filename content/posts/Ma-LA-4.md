---
title: "Ma LA 4"
date: 2020-07-08T16:47:15+08:00
draft: false
tags: ["數學", "線性代數"]
---

證明行等價矩陣的性質
> 1.  $A$ 與 $B$ 是行等價的，則 $B$ 與 $A$ 是行等價的.
> 2.  $A$ 與 $B$ 是行等價的，且 $B$ 與 $C$ 是行等價的， 則 $A$ 與 $C$ 是行等價的.

---

# 證明

### 1. 

\begin{array}{rrlr}
\because &A 與 B 是行等價的\\\\\\\\
\therefore &B &= &E_kE_{k-1} \cdots E_1A \\\\
\Rightarrow &(E_kE_{k-1} \cdots E_1)^{-1}B &= &(E_kE_{k-1} \cdots E_1)^{-1}E_kE_{k-1} \cdots E_1A\\\\
\Rightarrow &E_{1}^{-1}E_{2}^{-1} \cdots E_{k}^{-1}B &= & A
\end{array}

因此 $A = E_{1}^{-1}E_{2}^{-1} \cdots E_{k}^{-1}B$，而 $E^{-1}$ 是 $E$ 同類型的初等矩陣，得證.

### 2. 

\begin{equation}
 B = E_kE_{k-1} \cdots E_1A
\end{equation}
\begin{equation}
C = F_jF_{j-1} \cdots F_1B
\end{equation}
$(1)$ 式代入 $(2)$ 式
\begin{equation*}
C = F_jF_{j-1} \cdots F_1E_kE_{k-1} \cdots E_1A 
\end{equation*}

$A$ 經歷有限 ($k+j$) 次行運算得到 $C$，$A$ 與 $C$ 等價.

---

# 關聯內容
> ### 定理 
> 若 $E$ 爲一初等矩陣，則 $E$ 是非奇異的，且 $E^{-1}$ 爲一與其同類型的初等矩陣