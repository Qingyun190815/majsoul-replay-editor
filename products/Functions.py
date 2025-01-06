"""
    与 Database.py 对应的操作函数
    不要直接运行这个文件, 这个文件只提供函数供其他文件调用
"""
from products.Database import *
import os
import re

# 这里 player_num 参数表示对局玩家数, 默认是四麻, 三麻参数填3就行
def generator(player_num=4):
    # 作为模版的文件, 文件名是 template.js
    infile = open("./template.js", "r")
    if not os.path.exists("./output"):
        os.makedirs("./output")

    for index in range(len(avatar_ids)):
        outfile = open("./output/" + outfile_names[index], "w")
        flag_hand = flag_views = True
        name_count = id_count = 0

        """ tmp_nickname: 一桌角色所用的皮肤
        东起用的是契约皮肤, 其他三/两个用的是最近的三/两个皮肤, 没有皮肤用原皮顶上, 简单的说就是
        四麻: 
            若总共有至少四个皮肤, 则按照 "契约, 氪金皮1, 氪金皮2, 氪金皮3" 座次排列, 三个氪金皮按照时间先后顺序且都是最近出的
            若总共有只有三个皮肤, 则按照 "契约, 原皮, 氪金皮1, 氪金皮2" 排列
            若总共只有两个皮肤, 则按照 "契约, 原皮, 契约, 氪金皮" 排列
            若总共只有一个皮肤, 则按照 "契约, 原皮, 契约, 原皮" 排列
        三麻: 
            若总共有至少三个皮肤, 则按照 "契约, 氪金皮1, 氪金皮2" 排列, 两个氪金皮按照时间先后顺序且都是最近出的
            若总共只有两个皮肤, 则按照 "契约, 原皮, 氪金皮" 排列
            若总共只有一个皮肤, 则按照 "契约, 原皮, 契约" 排列
        名称方面原皮用角色名称, 契约皮用"角色名-契约"的形式, 氪金皮用皮肤名称(如一姬的"绮春歌")
        """
        tmp_nickname = []
        tmp_avatar_id = []
        if player_num == 4:
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
                    # 匹配成功, result[0] 是全体, result[1] 是 nickname
                    line = line.replace(result[1], tmp_nickname[name_count])
                    name_count += 1
                if id_count < 4 and name_count == 4:
                    result = re.search(pattern_id, line)
                    if result:
                        # 匹配成功, result[0] 是全体, result[1] 是 avatar_id
                        line = line.replace(result[1], str(tmp_avatar_id[id_count]))
                        id_count += 1
                outfile.write(line)
                if flag_views and charids[index] in char_unique_views and id_count == 4 and name_count == 4:
                    outfile.write("\n" + char_unique_views[charids[index]] + "\n")
                    flag_views = False
                if not use_dict and use_views:
                    if flag_hand and id_count == 4 and name_count == 4:
                        outfile.write("\n" + change_hand + "\n")
                        flag_hand = False

        elif player_num == 3:
            if len(nicknames[index]) == 1 or len(nicknames[index]) == 2:
                for j in [0, 1, 2]:
                    tmp_nickname.append(nicknames[index][(j + 1) % len(nicknames[index])])
            if len(nicknames[index]) == 3:
                tmp_nickname.append(nicknames[index][1])
                tmp_nickname.append(nicknames[index][0])
                tmp_nickname.append(nicknames[index][2])
            if len(nicknames[index]) >= 4:
                tmp_nickname.append(nicknames[index][1])
                for j in [-2, -1]:
                    tmp_nickname.append(nicknames[index][j])

            if len(avatar_ids[index]) == 1 or len(avatar_ids[index]) == 2:
                for j in [0, 1, 2]:
                    tmp_avatar_id.append(avatar_ids[index][(j + 1) % len(avatar_ids[index])])
            if len(avatar_ids[index]) == 3:
                tmp_avatar_id.append(avatar_ids[index][1])
                tmp_avatar_id.append(avatar_ids[index][0])
                tmp_avatar_id.append(avatar_ids[index][2])
            if len(avatar_ids[index]) >= 4:
                tmp_avatar_id.append(avatar_ids[index][1])
                for j in [-2, -1]:
                    tmp_avatar_id.append(avatar_ids[index][j])

            for line in infile:
                result = re.search(pattern_name, line)
                if name_count < 3 and result:
                    # 匹配成功, result[0] 是全体, result[1] 是 nickname
                    line = line.replace(result[1], tmp_nickname[name_count])
                    name_count += 1
                if id_count < 3 and name_count == 3:
                    result = re.search(pattern_id, line)
                    if result:
                        # 匹配成功, result[0] 是全体, result[1] 是 avatar_id
                        line = line.replace(result[1], str(tmp_avatar_id[id_count]))
                        id_count += 1
                outfile.write(line)
                if flag_views and charids[index] in char_unique_views_3P and id_count == 3 and name_count == 3:
                    outfile.write("\n" + char_unique_views_3P[charids[index]] + "\n")
                    flag_views = False
                if not use_dict and use_views:
                    if flag_hand and id_count == 3 and name_count == 3:
                        outfile.write("\n" + change_hand + "\n")
                        flag_hand = False
        if use_dict and not use_views:
            if charids[index] in dict_spchar_paipu:
                outfile.write("\n" + Replay_Script(dict_spchar_paipu[charids[index]]) + "\n")
        infile.seek(0)
        outfile.close()

    infile.close()
    return
