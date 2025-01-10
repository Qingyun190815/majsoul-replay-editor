from products.Database_raw import *


class Database_class:
    def __init__(self):
        self.chars = []
        char_num = 0
        for char in CHARACTER:
            self.chars.append({"id": CHARACTER[char]['id'], "skin": []})
            char_num += 1
            for skin in SKIN:
                if SKIN[skin]['character_id'] == CHARACTER[char]['id']:
                    self.chars[char_num - 1]['skin'].append({"id": SKIN[skin]['id'], "name": SKIN[skin]['name_chs']})
                    if SKIN[skin]['name_chs'] == "契约":
                        origin_name = self.chars[char_num - 1]['skin'][0]['name']
                        index = len(self.chars[char_num - 1]['skin']) - 1
                        # 名字过长修剪
                        if origin_name == "早乙女芽亚里":
                            self.chars[char_num - 1]['skin'][index]['name'] = "早乙女-契约"
                        elif origin_name == "鲁鲁修·兰佩洛基":
                            self.chars[char_num - 1]['skin'][index]['name'] = "鲁鲁修-契约"
                        else:
                            self.chars[char_num - 1]['skin'][index]['name'] = origin_name + "-契约"

        self.views = []
        # 立直棒, 和牌特效, 立直特效, 手的样式, 头像框, 桌布, 牌背, 牌面
        slots = [0, 1, 2, 3, 5, 6, 7, 13]
        for slot in slots:
            self.views.append({"slot": slot, "item": []})
        for item in ITEM:
            if ITEM[item]['category'] == 5 and ITEM[item]['type'] in slots:
                item_slot = ITEM[item]['type']
                index = 0
                while index < len(self.views) and self.views[index]['slot'] != item_slot:
                    index += 1
                self.views[index]['item'].append({"id": ITEM[item]['id'], "name": ITEM[item]['name_chs']})


        self.titles = []
        for title in TITLE:
            self.titles.append({"id": TITLE[title]['id'], "name": TITLE[title]['name_chs']})

        return

    def get_char(self, char_id):
        for char in self.chars:
            if char['id'] == char_id:
                return char

    def get_skin(self, skin_id):
        for char in self.chars:
            for skin in char['skin']:
                if skin['id'] == skin_id:
                    return skin

    def get_view(self, view_id):
        for slot in self.views:
            for item in slot['item']:
                if item['id'] == view_id:
                    return item

    def get_title(self, title_id):
        for title in self.titles:
            if title['id'] == title_id:
                return title


db = Database_class()
# for i in db.chars:
#     print(i)
# for i in db.views:
#     print(i)
# for i in db.titles:
#     print(i)
