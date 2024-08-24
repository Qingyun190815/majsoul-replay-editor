"""
    与 Database.py 对应的操作函数
    不要直接运行这个文件, 这个文件只提供函数供其他文件调用
"""
from products.Database import *
import re

''' use_dict
选择使用哪种方式来实现 使用非一般手模的角色 的牌谱
True 表示回放牌谱时, 放映 有对应角色的真实牌谱
    会用到变量: paipu_uuids, dict_spchar_paipu
    和函数: Replay_Script(uuid)
    为使用方便, 用这种方法在控制台输完之后会自动放映牌谱, 而不用手动找牌谱了
False 表示修改角色的手模为一般手模(通过修改装扮 views 里面 "slot": 3 手的样式 的方式)
    这种方法更简单但还原不是很完美, 某些角色使用女角色手模可能会有点怪
    会用到变量: change_hand
考虑再三, 在这里使用第一种方法
'''
use_dict = True


# 这里 player_num 参数表示对局玩家数, 默认是四麻, 三麻参数填3就行
def Generate_All_Avatar(player_num=4):
    special_charids_index = 0

    for index in range(len(avatar_ids)):
        outfile = open("./output/" + outfile_names[index], "w")
        name_count = 0
        id_count = 0

        if player_num == 4:
            tmp_nickname = []
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

            tmp_avatar_id = []
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

            flag = False
            if special_charids_index < len(special_charids) and charids[index] == special_charids[
                special_charids_index]:
                flag = True
                special_charids_index = special_charids_index + 1

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
                if not use_dict:
                    if flag and id_count == 4 and name_count == 4:
                        outfile.write("\n" + change_hand + "\n")
                        flag = False

        elif player_num == 3:
            tmp_nickname = []
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

            tmp_avatar_id = []
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

            flag = False
            if special_charids_index < len(special_charids) and charids[index] == special_charids[
                special_charids_index]:
                flag = True
                special_charids_index = special_charids_index + 1

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
                if not use_dict:
                    if flag and id_count == 3 and name_count == 3:
                        outfile.write("\n" + change_hand + "\n")
                        flag = False
        if use_dict:
            if charids[index] in dict_spchar_paipu:
                outfile.write("\n" + Replay_Script(dict_spchar_paipu[charids[index]]) + "\n")
        infile.seek(0)
        outfile.close()

    infile.close()
    return
