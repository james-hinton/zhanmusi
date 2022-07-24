with open('cedict_ts.u8', 'r', encoding='utf-8') as file:
    text = file.read()
    lines = text.split('\n')
    dict_lines = list(lines)

#define functions
    def parse_line(line):
        if line == '':
            dict_lines.remove(line)
            return 0
        line = line.rstrip('/')
        line = line.split('/')
        if len(line) <= 1:
            return 0
        english = line[1]
        char_and_pinyin = line[0].split('[')
        characters = char_and_pinyin[0]
        characters = characters.split()
        traditional = characters[0]
        simplified = characters[1]
        pinyin = char_and_pinyin[1]
        pinyin = pinyin.rstrip()
        pinyin = pinyin.rstrip("]")

        list_of_dicts.append({
            'traditional': traditional,
            'simplified': simplified,
            'pinyin': pinyin,
            'english': english
        })

    def remove_surnames():
        for x in range(len(list_of_dicts)-1, -1, -1):
            if "surname " in list_of_dicts[x]['english']:
                if list_of_dicts[x]['traditional'] == list_of_dicts[x+1]['traditional']:
                    list_of_dicts.pop(x)
            
    def main():
        for line in dict_lines:
                parse_line(line)
        remove_surnames()
        
        return list_of_dicts

list_of_dicts = []
parsed_dict = main()


# Save as JSON file:
import json
with open('cedict_ts.json', 'w', encoding='utf-8') as file:

    # Make sure to use the right encoding
    json.dump(parsed_dict, file, ensure_ascii=False, indent=4)
