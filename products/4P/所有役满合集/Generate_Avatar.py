"""
    这个文件用于生成对应角色的报菜名
"""
import re

# 改这里就行, nickname 和 avatar_id 的四项分别对应 seat 为 0, 1, 2, 3 的四个玩家, 这里用美游举例子
nickname = ["美游-契约", "美游", "美游-契约", "Prism Live"]
avatar_id = [408002, 408001, 408002, 408003]

outfile_names = infile_names = [
    "01_单倍役满.js",
    "02_双倍役满_非复合.js",
    "03_双倍役满_复合.js",
    "04_三倍役满_21.js",
    "05_三倍役满_111.js",
    "06_四倍役满_1111_22.js",
    "07_四倍役满_211.js",
    "08_五倍役满_221.js",
    "09_五倍役满_2111.js",
    "10_六倍役满_2211.js",
]

for i in range(len(outfile_names)):
    infile = open("./" + infile_names[i], "r")
    outfile = open("./output/" + outfile_names[i], "w")

    pattern_name = r"editdata\.player_datas\[\d]\.nickname = \"(.*)\";"
    pattern_id = r"editdata\.player_datas\[\d]\.avatar_id = (.*);"

    name_count = 0
    id_count = 0

    for line in infile:
        result = re.search(pattern_name, line)
        if name_count < 4 and result:
            # 匹配成功, result[0] 是全体, result[1] 是 nickname
            line = line.replace(result[1], nickname[name_count])
            name_count += 1
        if id_count < 4 and name_count == 4:
            result = re.search(pattern_id, line)
            if result:
                # 匹配成功, result[0] 是全体, result[1] 是 avatar_id
                line = line.replace(result[1], str(avatar_id[id_count]))
                id_count += 1
        outfile.write(line)

    infile.close()
    outfile.close()

