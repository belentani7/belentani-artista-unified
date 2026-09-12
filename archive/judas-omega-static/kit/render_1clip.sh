#!/usr/bin/env bash
# JUDAS OMEGA - render de 1 clip de prueba (5s) con SkyReels V2 DF-1.3B
# Uso: bash render_1clip.sh    (despues de setup.sh)
set -euo pipefail

cd /root 2>/dev/null || cd ~
cd SkyReels-V2
source .venv/bin/activate

MODEL="Skywork/SkyReels-V2-DF-1.3B-540P"
RES="540P"
BASE_FRAMES=97
NUM_FRAMES=97   # aprox 745s? No: 97 frames = ~4-5s a 24fps. Para 5s usamos 121.
# 97 frames a 24fps = 4.04s. Para ~5s: 121 frames.
NUM_FRAMES=121
OVERLAP=17

STYLE="BELENTANI/JUDAS/OMEGA. Estetica oscura inmersiva ceremonial: neones magenta sobre fondo negro, rojo sangre, oro antiguo, vidrio negro, humo denso, particulas suspendidas. Figura humana central androgina escultural, piel como materia viva (obsidiana, porcelana, metal lacado). Camara lenta ceremonial, push-in suave, low key extremo, 24fps, cinematic premium, sin look corporativo ni UI."

CLIP1_PROMPT="Primer plano: negro absoluto, un pulso magenta abre una grieta minima en una superficie de vidrio oscuro, reflejos humedos."

python3 generate_video_df.py \
  --model_id ${MODEL} \
  --resolution ${RES} \
  --ar_step 0 \
  --base_num_frames ${BASE_FRAMES} \
  --num_frames ${NUM_FRAMES} \
  --overlap_history ${OVERLAP} \
  --prompt "${STYLE} ${CLIP1_PROMPT}" \
  --addnoise_condition 20 \
  --offload \
  --teacache \
  --use_ret_steps \
  --teacache_thresh 0.3 \
  --seed 42 \
  --outdir ./video_out

echo ""
echo "Clip 1 generado en ./video_out/"
