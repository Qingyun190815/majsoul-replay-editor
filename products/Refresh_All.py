"""
    会运行所有 python 脚本进行刷新操作
"""

import os

home = os.getcwd()

file_name = "Generate_All_Avatar"
run_python = "python3 " + file_name + ".py"
path_prefix = "4P/"
paths = [
    "所有角色报所有菜名系列",
    "所有角色报所有菜名系列",
    "最长菜名与最高番数",
    "赤羽之战相关",
]

file_name_3P = "Generate_All_Avatar_3P"
run_python_3P = "python3 " + file_name_3P + ".py"
path_prefix_3P = "3P/"
paths_3P = [
    "最长菜名与最高番数",
]

for path in paths:
    change_dir = path_prefix + path
    os.chdir(change_dir)
    os.system(run_python)
    os.chdir(home)

for path_3P in paths_3P:
    change_dir = path_prefix_3P + path_3P
    os.chdir(change_dir)
    os.system(run_python_3P)
    os.chdir(home)

os.chdir("4P/所有役满合集")
os.system("python3 Generate_Avatar.py")
os.chdir(home)
