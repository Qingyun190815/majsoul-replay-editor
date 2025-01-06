"""
    这个文件使用 file_names 里面的文件来对所有报菜名进行同步刷新
    和 Functions.py 中的函数大差不差, 数据在 Database.py 中
"""
from products.Database import *
import os
import re

file_names = [
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

if not os.path.exists("./output"):
    os.makedirs("./output")

outfile_dirname = []
for i in range(len(charids)):
    if charids[i] == 200071:  # 因为文件夹不能以句点结尾, 故 C.C. 舍弃两个句点变成 CC
        outfile_dirname.append(str(charids[i]) + "_CC")
    else:
        outfile_dirname.append(str(charids[i]) + "_" + nicknames[i][0])
    if not os.path.exists("./output/" + outfile_dirname[i]):
        os.makedirs("./output/" + outfile_dirname[i])


def generator_sp():
    for file_name in file_names:
        infile = open("./" + file_name, "r")

        tmp_nickname = []
        tmp_avatar_id = []
        for index in range(len(avatar_ids)):
            outfile = open("./output/" + outfile_dirname[index] + "/" + file_name, "w")
            flag_hand = flag_views = True
            name_count = id_count = 0

            if len(nicknames[index]) == 1 or len(nicknames[index]) == 2:
                for j in [0, 1, 2, 3]:
                    tmp_nickname.append(nicknames[index][(j + 1) % len(nicknames[index])])
            if len(nicknames[index]) == 3 or len(nicknames[index]) == 4:
                tmp_nickname.append(nicknames[index][1])
                tmp_nickname.append(nicknames[index][0])
                tmp_nickname.append(nicknames[index][len(nicknames[index]) - 2])
                tmp_nickname.append(nicknames[index][len(nicknames[index]) - 1])
            if len(nicknames[index]) >= 5:
                tmp_nickname.append(nicknames[index][1])
                for j in [-3, -2, -1]:
                    tmp_nickname.append(nicknames[index][j])

            if len(avatar_ids[index]) == 1 or len(avatar_ids[index]) == 2:
                for j in [0, 1, 2, 3]:
                    tmp_avatar_id.append(avatar_ids[index][(j + 1) % len(avatar_ids[index])])
            if len(avatar_ids[index]) == 3 or len(avatar_ids[index]) == 4:
                tmp_avatar_id.append(avatar_ids[index][1])
                tmp_avatar_id.append(avatar_ids[index][0])
                tmp_avatar_id.append(avatar_ids[index][len(avatar_ids[index]) - 2])
                tmp_avatar_id.append(avatar_ids[index][len(avatar_ids[index]) - 1])
            if len(avatar_ids[index]) >= 5:
                tmp_avatar_id.append(avatar_ids[index][1])
                for j in [-3, -2, -1]:
                    tmp_avatar_id.append(avatar_ids[index][j])

            for line in infile:
                result = re.search(pattern_name, line)
                if name_count < 4 and result:
                    line = line.replace(result[1], tmp_nickname[name_count])
                    name_count += 1
                if id_count < 4 and name_count == 4:
                    result = re.search(pattern_id, line)
                    if result:
                        line = line.replace(result[1], str(tmp_avatar_id[id_count]))
                        id_count += 1
                outfile.write(line)
                if charids[index] in char_unique_views and id_count == 4 and name_count == 4:
                    outfile.write("\n" + char_unique_views[charids[index]] + "\n")
                if not use_dict and use_views:
                    if flag_hand and id_count == 4 and name_count == 4:
                        outfile.write("\n" + change_hand + "\n")
                        flag_hand = False

            if use_dict and not use_views:
                if charids[index] in dict_spchar_paipu:
                    outfile.write("\n" + Replay_Script(dict_spchar_paipu[charids[index]]) + "\n")
            infile.seek(0)
            outfile.close()

        infile.close()
    return


generator_sp()
