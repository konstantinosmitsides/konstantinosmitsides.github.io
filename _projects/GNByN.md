---
layout: page
title: GNByN
description: "GraphNETbyNET: A novel architecture of Graph Neural Netowrks (GNNs), inspired by a variety of GNN and NN architectures to generate high-resolution brain connectivity graphs from low-resolution ones." 
img: assets/img/Super_resolution_img.png
importance: 2
category: AI Research
related_publications: true
---
This is the work of my group project in the Deep Graph-based Learning module in MSc AI at Imperial. For complete comprehension, please refer to our [report](/assets/pdf/super_resolution_report.pdf) and [repository](https://github.com/konstantinosmitsides/BrainGraphSuperResolution).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Super_resolution_img.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

# Introduction
The popularity of **image super-resolution** (SR) research has grown significantly, especially with the adoption of Deep Learning (DL) techniques. SR methods increase the resolution of data such as **brain connectivity matrices** (BCMs)—compact representations of the strengths and patterns of the structural connections between brain regions. The large-scale acquisition of high-resolution BCMs from raw neuroimaging data is costly in terms of time, money and computational resources. Brain SR could significantly speed up acquisition, via the generation of of BCMs from existing ones, thus reducing the cost of research and increasing the availability of brain data for clinical applications—for instance Alzheimer's detection.

BCMs are naturally represented as graphs, where the **nodes** are represented by the brain regions and the **edges** by the brain connections. This representation makes the use of Graph Neural Netowrks (GNNs) more intuitive and efficient than traditional DL approaches. Recently, many graph-based frameworks have been proposed for brain graph SR. Inspired by GraphUNet {% cite graphunet %}, we propose a framework to learn the generation of high-resolution brain graphs inductively: GraphNETbyNET (GNByN).

### Results

The final model scores a **Mean Absolute Error (MAE)** of **0.13** on the testing data, underscoring the precision of our model's high-resolution brain image generations.

# Model Architecture
GNByN uses a deep Graph Neural Network (GNN) featuring two main components, the UpChanger and the DownChanger, each containing seven blocks of Graph Convolution Netowrk (GCN) layers. This model incrementally adjusts node counts in adjacency and feature matrices to learn mappings between Low Resolution (LR) and High Resolution (HR) brain connectivity encodings. To address over-smoothing {% cite oversmoothing %}, it incorporates the GraphCON {% cite graphcon %} framework, which introduces oscillatory behaviour to maintain differentiation among node features in deep networks. The UpChanger progressively increases nodes from 160 to 268, while the DownChanger reduces them in reverse order. Inspired by the GraphUNet architecture, this structure ensures effective dimensionality changes and enriched information propagation. Moreover, the model uses GATv2Conv {% cite gatv2 %} layers for attention mechanisms and LSTM-like gates to manage long-term dependencies and node embeddings.

The LR and HR data are passed into the UpChanger and the DownChanger, respectively, to obtain the two sequences of adjacency matrices over all the steps. Between the two sequences, the adjacency matrices with the same number of nodes are compared to compute the average MSE loss. This loss is backpropagated to update the DownChanger's parameters while keeping the UpChanger frozen. In the next stage, a weighted average MSE loss is computed, with the final HR projection from the UpChanger given increasing importance as training progresses, defined by the weight $$\alpha_{t}=\frac{(2-\exp(\frac{-t}{5})}{2}$$. This loss updates the UpChanger's parameters while keeping the DownChanger frozen, and are aimed to focus more on the correctness of the final HR projection. Finally, a reconstruction loss is calculated between the HR projection from the UpChanger and the ground truth, which updates the parameters of both the UpChanger and DownChanger.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DGL_high_level_archi.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level architecture and step-level comutational graph. Batchnorm, laynorm and dropout layers are omitted. Learnable parameters (and dimensions) excluding VAEs and standard layers:$$D_{A,t}(d_{t+1} \times d_t), D_{A,t}(d_{t+1} \times d_t), D_{Z,t}(\text{channels} \times d_{t+1}), \beta_{A} (d_{t+1} \times 1), \beta_{Z} (d_{t+1} \times 1), i_t (d_{t+1} \times 1), f_{t} (d_{t+1} \times 1)$$
</div>

## Authors
- Konstantinos Mitsides
- Moritz Hauschulz
- Timothy Wong
- Sadegh Emami
- Dilay Ercelik

