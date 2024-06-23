npm run build

declare -a exclude_files=("background.js")

# Copy files from src to dist, excluding the ones listed above
rsync -av --progress src/ dist/ --exclude=${exclude_files[@]}