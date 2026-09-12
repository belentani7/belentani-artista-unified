#!/usr/bin/env bash
# JUDAS OMEGA - SkyReels V2 setup en VM GPU (RTX 3090 24GB+ o similar)
# Uso: bash setup.sh   (en la VM, dentro de /workspace o ~)
set -euo pipefail

echo "== [1/4] Python y git =="
which python3 git curl wget >/dev/null || { apt-get update -y && apt-get install -y python3 git curl wget; }

echo "== [2/4] Clonar SkyReels V2 =="
cd /root 2>/dev/null || cd ~
if [ ! -d SkyReels-V2 ]; then
  git clone https://github.com/SkyworkAI/SkyReels-V2
fi
cd SkyReels-V2
python3 -m venv .venv
source .venv/bin/activate
pip install -U pip
pip install -r requirements.txt
pip install diffusers accelerate safetensors

echo "== [3/4] Modelo =="
# Usamos el Diffusion-Forcing 1.3B (14.7GB VRAM, va con --offload en 24GB).
# Link HF oficial: Skywork/SkyReels-V2-DF-1.3B-540P
export HF_MODEL_ID="Skywork/SkyReels-V2-DF-1.3B-540P"

echo "== [4/4] Test de entorno =="
python3 - <<'PY'
import torch
print("CUDA:", torch.cuda.is_available(), "| GPU:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "N/A")
vram = torch.cuda.get_device_properties(0).total_memory/1024**3 if torch.cuda.is_available() else 0
print(f"VRAM: {vram:.1f} GB")
if vram < 20: print("AVISO: <20GB, usare --offload (mas lento pero corre)")
PY

echo ""
echo "LISTO. Siguiente -> bash render_1clip.sh"
echo "Si 14.7GB no cabe sin offload, el script lo hace automatico."
