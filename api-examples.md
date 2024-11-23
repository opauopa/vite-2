---
outline: deep
---

# Moan读写驱动示例

## 导出函数

```c++
	MoanMouseInit
	MoanMouseMove
	MoanReadProcessMemory
	MoanWriteProcessMemory
	MoanQueryProcessModuleInfo
	MoanAllocProcessMemory
	MoanFreeProcessMemory
	MoanInitDriver
	MoanForceDeleteFile
	MoanInit3
```



## 初始化

```cpp
/// <summary>
/// 初始化驱动
/// 参数1 ：卡串
/// </summary>
using MoanInitDriver = LONG(WINAPI*)(const char* verify_code);
```



**示例**



```cpp
	auto h = LoadLibraryA("moan_x64.vmp.dll");


	g_MoanInitDriver = (MoanInitDriver)GetProcAddress(h, "MoanInitDriver");
	g_MoanReadProcessMemory = (MoanReadProcessMemory)GetProcAddress(h, "MoanReadProcessMemory");
	g_MoanWriteProcessMemory = (MoanWriteProcessMemory)GetProcAddress(h, "MoanWriteProcessMemory");
	g_MoanQueryProcessModuleInfo = (MoanQueryProcessModuleInfo)GetProcAddress(h, "MoanQueryProcessModuleInfo");
	g_MoanAllocProcessMemory = (MoanAllocProcessMemory)GetProcAddress(h, "MoanAllocProcessMemory");
	g_MoanFreeProcessMemory = (MoanFreeProcessMemory)GetProcAddress(h, "MoanFreeProcessMemory");
	g_MoanMouseInit = (MoanMouseInit)GetProcAddress(h, "MoanMouseInit");
	g_MoanMouseMove = (MoanMouseMove)GetProcAddress(h, "MoanMouseMove");
	g_MoanInit3 = (MoanInit3)GetProcAddress(h, "MoanInit3");
	g_MoanForceDeleteFile = (MoanForceDeleteFile)GetProcAddress(h, "MoanForceDeleteFile");

	auto status = g_MoanInitDriver("自己的卡密");

	g_MoanInit3(m_pid);

	if (status == 0x88888888)
	{
		printf("[+] driver init success : %x\n", status);
		// 成功加载驱动
		return true;
	}
	else
	{
		// 加载失败
		printf("[-] driver init error : %x\n", status);
		return false;
	}
```





## 读写函数

```cpp
/// 读取内存
/// </summary>
/// param1 target_pid
/// param2 目标地址
/// param3 buf
/// param4 读取大小
/// <returns></returns
using MoanReadProcessMemory = LONG(WINAPI*)(ULONG32 pid, ULONG64 target_address, LPVOID buffer, ULONG32 size);
/**
* \brief 写入内存
* \param pid
* \param target_address
* \param buffer
* \param size
* \return
*/
using MoanWriteProcessMemory = LONG(WINAPI*)(ULONG32 pid, ULONG64 target_address, LPVOID buffer, ULONG32 size);

```

## 获取进程模块基地址

```cpp

/**
  /\brief 读取指定进程模块地址
 * \param pid
 * \param module_name
 * \param module_base
 * \param module_size
 * \return
 */
using MoanQueryProcessModuleInfo = LONG(WINAPI*)(ULONG32 pid, const char* module_name, OUT ULONG64 module_base, OUT PULONG32 module_size);
```







## 键鼠部分



```cpp
/// <summary>
/// 初始化鼠标
/// </summary>
/// <returns></returns>
using MoanMouseInit = LONG(WINAPI*)();
/// <summary>
/// 移动鼠标
/// </summary>
/// <param name="dx">坐标x</param>
/// <param name="dy">坐标y</param>
/// <param name="Flags">模式 0 == 相对坐标 | 1 == 绝对坐标</param>
/// <returns></returns>
using MoanMouseMove = LONG(WINAPI*)(LONG dx, LONG dy, USHORT Flags);
```





## 其他部分

```cpp
//  参数1 需要破虚拟化的目标进程id
using MoanInit3 = LONG(WINAPI*) (IN DWORD pid);
/// <summary>
/// 强删文件
/// </summary>
using MoanForceDeleteFile = LONG(WINAPI*) (IN const char* file_path);
```

