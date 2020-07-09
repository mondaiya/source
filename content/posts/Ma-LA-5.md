---
title: "Ma LA 5"
date: 2020-07-09T09:53:26+08:00
draft: false
description : 出典自 Steven J.Leon 著 Linear Algebra with Applications (Ninth Edition) Page.42
tags: ["數學", "線性代數"]
---

令

$$
A = \begin{bmatrix}
0 & 1 & 0 & 0 \\\\
0 & 0 & 1 & 0 \\\\
0 & 0 & 0 & 1 \\\\
0 & 0 & 0 & 0
\end{bmatrix}
$$

證明當 $n \geq 4$ 時 $A^n = O$ 

---

<div class="proof">
$\forall n \geq 4$

\begin{array}{rrll}
A^n = A^4 A^{n-4} 
    &= &\begin{bmatrix}
            0 & 1 & 0 & 0 \\\\
            0 & 0 & 1 & 0 \\\\
            0 & 0 & 0 & 1 \\\\
            0 & 0 & 0 & 0
        \end{bmatrix} ^ 4 &A^{n-4}\\\\
    &= &\begin{bmatrix}
            0 & 0 & 1 & 0 \\\\
            0 & 0 & 0 & 1 \\\\
            0 & 0 & 0 & 0 \\\\
            0 & 0 & 0 & 0
        \end{bmatrix} ^ 2 &A^{n-4}\\\\
    &= &\begin{bmatrix}
            0 & 0 & 0 & 0 \\\\
            0 & 0 & 0 & 0 \\\\
            0 & 0 & 0 & 0 \\\\
            0 & 0 & 0 & 0
        \end{bmatrix} &A^{n-4} \\\\
    &= &O
\end{array}
</div>