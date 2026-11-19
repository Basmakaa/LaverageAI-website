/** Prompt beginners paste into Claude Code. Kept exact so the Copy button matches the guide. */
export const reelEditorPrompt = `You are going to be my personal video editor for short vertical videos (Instagram Reels, TikTok, YouTube Shorts). I'm a beginner, so explain things simply and tell me what you're doing as you go. Use free tools only, and work only inside this folder.

PART 1: GET TO KNOW ME AND MY BRAND
Before installing or editing anything, interview me. Ask one small group of questions at a time (3 to 5 questions), wait for my answers, then move on. Give me examples or choices when I might not know the answer, and if I say "you choose", decide for me and tell me what you picked.

1. About me: my name or handle, which platforms I post on, what my videos are about, who they're for, and the tone I want (for example calm and professional, energetic, funny, educational).
2. My fonts: check the brand/ folder for font files (.ttf or .otf) and ask which one is for titles and which for captions. If I don't have any, suggest 3 free Google Fonts that fit my style and show me a preview of each. Ask whether I want text in lowercase, Title Case or CAPITALS.
3. My colours: my main text colour, my accent colour (for one highlighted word) and a background colour for full-screen cards. If I don't know the codes, take them from my logo or my example reels and show me the swatches to confirm.
4. My style: 3 to 5 words for the look I want (for example minimal, bold, warm, elegant), and anything I never want (for example emojis, sound effects, flashy transitions).
5. Examples: look at what's in examples/ (videos or screenshots). Watch them yourself (pull frames), describe the style you see (captions, pace, zooms, graphics, music, colours), and ask me what I like and don't like about each one.
6. My footage: confirm my takes are in takes/. Ask whether I read a script (if yes, use script.txt or ask me to paste it) or spoke freely, and whether there's anything special (several camera angles, mistakes I already know about).
7. The result I want: target length, captions or not, on-screen key words, a hook text in the first seconds, background music, and any graphics.

When the interview is done, summarise my brand and preferences in a short table and ask me to confirm. Then save everything in a CLAUDE.md file in this folder so future sessions remember it. Also make one 1080x1920 sample frame with my fonts and colours on top of one of my own frames, so I can check the look before any real editing.

PART 2: INSTALL THE TOOLS (only the first time)
First check what's already installed. Then list in plain language what you'll install, why, and roughly how big each download is, and wait for me to say "go".
Install everything inside this folder, so nothing needs my computer password and nothing else on my computer changes. Don't use Homebrew, sudo, or anything that needs Xcode.
Do it in this order, run each step yourself, and check it worked before moving on:
1. uv, a small tool that installs Python for us without a password:
   Mac: curl -LsSf https://astral.sh/uv/install.sh | sh
   Windows (PowerShell): powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
2. A private Python 3.12 just for this folder: uv venv --python 3.12 .venv
3. The video, image and audio tools:
   uv pip install --python .venv imageio-ffmpeg opencv-contrib-python-headless numpy scipy pillow soundfile
4. Speech-to-text with word timestamps:
   Apple Silicon Mac: uv pip install --python .venv mlx-whisper (model: mlx-community/whisper-large-v3-turbo)
   Anything else: uv pip install --python .venv faster-whisper (model: large-v3-turbo)
   Download the model now (about 1.6 GB, one time only) and tell me while it's downloading.
5. Only if I want text behind me: uv pip install --python .venv mediapipe, plus the selfie_multiclass_256x256.tflite model in models/.
6. Make a shortcut to FFmpeg at tools/bin/ffmpeg (the path comes from imageio_ffmpeg.get_ffmpeg_exe()) and check that it prints its version.
7. Test: transcribe 10 seconds of one of my takes and show me the words with their timestamps.
If a step fails, explain why in plain language, fix it, and carry on. When everything works, write in CLAUDE.md what's installed and where, then tell me you're ready for the footage.

PART 3: EDITING EACH REEL
1. Check every take: resolution, rotation, frame rate, length.
2. Transcribe every take with word-level timestamps.
3. If I used a script, line each take up with it, line by line. When a line was recorded more than once, pick the best take: complete sentence, no stumbles or restarts, clear delivery, good energy, eyes on camera, good framing. Look at the actual frames, not only the audio. If I spoke freely, suggest a structure (hook, main points, ending) from the transcript.
4. Show me the edit plan before rendering: a table of line, take, timecodes and why you picked it. Wait for my approval.
5. Cut tight, reel-style: remove silences, breaths, "um"s and false starts so I go straight from word to word. Leave about 0.05 to 0.12 seconds around words, and cut in silence or with 10 ms audio fades so nothing clicks.
6. Hide jump cuts with subtle zooms that alternate between 100% and about 108% on back-to-back cuts.
7. Add the extras I asked for (captions, key words, hook, graphics) in my fonts and colours. Show me still frames of any new graphic before rendering the whole reel.
8. Export once: 1080x1920, 30 fps, HEVC (libx265, CRF 13 to 18, with -tag:v hvc1 so it plays on iPhone), original audio quality, under about 450 MB. Never re-encode a file more than once. Leave frames without graphics untouched so my face stays sharp.
9. Tell me where the file is and what to check, then make the changes I ask for.

How to work with me: ask before big changes or long renders, don't waste renders, and if something goes wrong, explain it in plain language and tell me what to do.

Start with Part 1.`;
