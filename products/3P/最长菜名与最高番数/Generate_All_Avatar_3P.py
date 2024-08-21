"""
    这个文件使用"template.js"来对所有报菜名进行同步刷新
"""
from products.Database import nicknames, avatar_ids, charids, special_charids, outfile_names, pattern_name, pattern_id, infile, change_hand
import re

special_charids_index = 0

for i in range(len(avatar_ids)):
    outfile = open("./output/" + outfile_names[i], "w")
    name_count = 0
    id_count = 0

    tmp_nickname = []
    if len(nicknames[i]) == 1 or len(nicknames[i]) == 2:
        for j in [0, 1, 2]:
            tmp_nickname.append(nicknames[i][(j + 1) % len(nicknames[i])])
    if len(nicknames[i]) == 3:
        tmp_nickname.append(nicknames[i][1])
        tmp_nickname.append(nicknames[i][0])
        tmp_nickname.append(nicknames[i][2])
    if len(nicknames[i]) >= 4:
        tmp_nickname.append(nicknames[i][1])
        for j in [-2, -1]:
            tmp_nickname.append(nicknames[i][j])

    tmp_avatar_id = []
    if len(avatar_ids[i]) == 1 or len(avatar_ids[i]) == 2:
        for j in [0, 1, 2]:
            tmp_avatar_id.append(avatar_ids[i][(j + 1) % len(avatar_ids[i])])
    if len(avatar_ids[i]) == 3:
        tmp_avatar_id.append(avatar_ids[i][1])
        tmp_avatar_id.append(avatar_ids[i][0])
        tmp_avatar_id.append(avatar_ids[i][2])
    if len(avatar_ids[i]) >= 4:
        tmp_avatar_id.append(avatar_ids[i][1])
        for j in [-2, -1]:
            tmp_avatar_id.append(avatar_ids[i][j])

    flag = False
    if special_charids_index < len(special_charids) and charids[i] == special_charids[special_charids_index]:
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
        if flag and id_count == 3 and name_count == 3:
            outfile.write("\n" + change_hand + "\n")
            flag = False
    infile.seek(0)
    outfile.close()

infile.close()

