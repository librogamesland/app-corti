
export file="${1%.md}"
export name="${file##*/}"
export title="$(awk '/#/ {for (i=2; i<NF; i++) printf $i " "; print $NF; exit}' "$1")"

export author="$(awk '/author:/ {for (i=2; i<NF; i++) printf $i " "; print $NF}' "$1")"
echo "$title" "$author"

cat $1  | sed "s/###/#/g" > "$file-extended.md"


pandoc "$file-extended.md" --from markdown+gfm_auto_identifiers -o "$name.epub" --metadata subtitle="$SUBTITLE" --metadata title="$title" --metadata author="$author" --metadata date="$(date +"%d/%m/%y")"

rm -rf "$file-extended.md"

ebook-convert  "$name.epub"  "$name.epub"
