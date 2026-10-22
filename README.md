# CSE 4105 System Programming

Course materials for **CSE 4105 System Programming**, Department of Computer Science and Engineering, University of Barishal.
Course teacher: **Md Mahbub E Noor**, Assistant Professor.

The course follows one C program, `hello.c`, all the way down: how an assembler, a macro processor and a loader turn
source code into a running program, how the ELF format describes it, how the Linux kernel boots and runs it, and how the
kernel talks to hardware through interrupts, modules and device drivers.

**Website:** open `index.html` (or [click here](https://mahbubnoor.github.io/Introduction-to-system-programming/ ) for the same material as a web page with
the videos playing in the browser.

## How to study with these materials

1. **Before class:** skim the slides of the next lecture (*Present* in the browser, or the PDF). Each deck starts with a short recap quiz of the previous one.
2. **In class:** the slides build step by step. The videos show one key process of the lecture as an animation.
3. **After class:** check yourself with the *Checkpoint* slide near the end of each deck, then do the homework on the last slides.
4. **In the lab:** open the lab's interactive page (`labs/labNN.html`): it lists the tasks, shows every file, and has tools
   that run in the browser to check your thinking. Then download the lab zip, read its `README.txt`, and fill in the parts
   marked `TODO` in the starter files. The browser tools do not replace the real lab on Linux.

Every terminal output on the slides is **real**: it was produced by running the code on Ubuntu 24.04 (gcc 13.3) or in a
QEMU virtual machine running Ubuntu's Linux 6.8 kernel. On your PC, addresses, process IDs and timings will be different.
That is expected; the shape of the output is what matters.

## Short course (this semester): 10 classes

The most important ideas of the course in 10 classes, made from the same slides. Each class ends with its key ideas,
three homework questions and a tool to try in the browser.

| Class | Topic | Present | Slides | Try it |
|---|---|---|---|---|
| 1 | What System Programming Is | [animated](short/class_01.html) | [PDF](short/class_01.pdf) | [lab01.html](labs/lab01.html#try) |
| 2 | Machine Language and the SIC Machine | [animated](short/class_02.html) | [PDF](short/class_02.pdf) | [lab02.html](labs/lab02.html#try) |
| 3 | Assemblers | [animated](short/class_03.html) | [PDF](short/class_03.pdf) | [lab03.html](labs/lab03.html#try) |
| 4 | Macros and Loaders | [animated](short/class_04.html) | [PDF](short/class_04.pdf) | [lab05.html](labs/lab05.html#try) |
| 5 | Linking and the ELF Format | [animated](short/class_05.html) | [PDF](short/class_05.pdf) | [lab06.html](labs/lab06.html#try) |
| 6 | The Linux Kernel and Booting | [animated](short/class_06.html) | [PDF](short/class_06.pdf) | [lab07.html](labs/lab07.html#try) |
| 7 | Processes and Scheduling | [animated](short/class_07.html) | [PDF](short/class_07.pdf) | [lab08.html](labs/lab08.html#try) |
| 8 | System Calls, Pipes and Signals | [animated](short/class_08.html) | [PDF](short/class_08.pdf) | [lab09.html](labs/lab09.html#try) |
| 9 | Memory and Files | [animated](short/class_09.html) | [PDF](short/class_09.pdf) | [lab11.html](labs/lab11.html#try) |
| 10 | Interrupts, Modules and Drivers | [animated](short/class_10.html) | [PDF](short/class_10.pdf) | [lab13.html](labs/lab13.html#try) |

## Lectures (full course)

| Lecture | Topic | Present | Slides | PowerPoint | Video |
|---|---|---|---|---|---|
| 1 | Introduction to System Programming and Machine Structures | [animated](present/lecture_01.html) | [PDF](slides/lecture_01.pdf) | [pptx](decks/lecture_01.pptx) | [mp4](videos/lecture_01_video.mp4) |
| 2 | Machine and Assembly Language (SIC, SIC/XE and x86-64, seen through C) | [animated](present/lecture_02.html) | [PDF](slides/lecture_02.pdf) | [pptx](decks/lecture_02.pptx) | [mp4](videos/lecture_02_video.mp4) |
| 3.1 | Basic Assembler Functions (from source program to object program) | [animated](present/lecture_03.1.html) | [PDF](slides/lecture_03.1.pdf) | [pptx](decks/lecture_03.1.pptx) | [mp4](videos/lecture_03.1_video.mp4) |
| 3.2 | Machine-Dependent Assembler Features (SIC/XE formats, displacements, relocation) | [animated](present/lecture_03.2.html) | [PDF](slides/lecture_03.2.pdf) | [pptx](decks/lecture_03.2.pptx) | [mp4](videos/lecture_03.2_video.mp4) |
| 3.3 | Machine-Independent Features and assembler design options | [animated](present/lecture_03.3.html) | [PDF](slides/lecture_03.3.pdf) | [pptx](decks/lecture_03.3.pptx) | [mp4](videos/lecture_03.3_video.mp4) |
| 4 | Macro Processors (from SIC macros to the C preprocessor) | [animated](present/lecture_04.html) | [PDF](slides/lecture_04.pdf) | [pptx](decks/lecture_04.pptx) | [mp4](videos/lecture_04_video.mp4) |
| 5.1 | Loaders (absolute, relocating and linking) | [animated](present/lecture_05.1.html) | [PDF](slides/lecture_05.1.pdf) | [pptx](decks/lecture_05.1.pptx) | [mp4](videos/lecture_05.1_video.mp4) |
| 5.2 | Loader Design Options and dynamic linking | [animated](present/lecture_05.2.html) | [PDF](slides/lecture_05.2.pdf) | [pptx](decks/lecture_05.2.pptx) | [mp4](videos/lecture_05.2_video.mp4) |
| 6 | Object File Formats (reading ELF byte by byte) | [animated](present/lecture_06.html) | [PDF](slides/lecture_06.pdf) | [pptx](decks/lecture_06.pptx) | [mp4](videos/lecture_06_video.mp4) |
| 7.1 | The Linux Kernel (an overview from the inside) | [animated](present/lecture_07.1.html) | [PDF](slides/lecture_07.1.pdf) | [pptx](decks/lecture_07.1.pptx) | [mp4](videos/lecture_07.1_video.mp4) |
| 7.2 | Booting Linux (from power-on to your own PID 1) | [animated](present/lecture_07.2.html) | [PDF](slides/lecture_07.2.pdf) | [pptx](decks/lecture_07.2.pptx) | [mp4](videos/lecture_07.2_video.mp4) |
| 8.1 | Processes (fork, exec, exit and wait) | [animated](present/lecture_08.1.html) | [PDF](slides/lecture_08.1.pdf) | [pptx](decks/lecture_08.1.pptx) | [mp4](videos/lecture_08.1_video.mp4) |
| 8.2 | execve and Scheduling (how a file becomes a process, and who gets the CPU) | [animated](present/lecture_08.2.html) | [PDF](slides/lecture_08.2.pdf) | [pptx](decks/lecture_08.2.pptx) | [mp4](videos/lecture_08.2_video.mp4) |
| 9 | System Calls (the only door into the kernel) | [animated](present/lecture_09.html) | [PDF](slides/lecture_09.pdf) | [pptx](decks/lecture_09.pptx) | [mp4](videos/lecture_09_video.mp4) |
| 10.1 | Inter-process Communication (pipes, FIFOs and shared memory) | [animated](present/lecture_10.1.html) | [PDF](slides/lecture_10.1.pdf) | [pptx](decks/lecture_10.1.pptx) | [mp4](videos/lecture_10.1_video.mp4) |
| 10.2 | Signals (the kernel's doorbell) | [animated](present/lecture_10.2.html) | [PDF](slides/lecture_10.2.pdf) | [pptx](decks/lecture_10.2.pptx) | [mp4](videos/lecture_10.2_video.mp4) |
| 11.1 | Virtual Memory (pages, page tables and page faults) | [animated](present/lecture_11.1.html) | [PDF](slides/lecture_11.1.pdf) | [pptx](decks/lecture_11.1.pptx) | [mp4](videos/lecture_11.1_video.mp4) |
| 11.2 | Memory Allocation (malloc, the heap, and the kernel's allocators) | [animated](present/lecture_11.2.html) | [PDF](slides/lecture_11.2.pdf) | [pptx](decks/lecture_11.2.pptx) | [mp4](videos/lecture_11.2_video.mp4) |
| 12.1 | Files and the VFS (descriptors, inodes, directories) | [animated](present/lecture_12.1.html) | [PDF](slides/lecture_12.1.pdf) | [pptx](decks/lecture_12.1.pptx) | [mp4](videos/lecture_12.1_video.mp4) |
| 12.2 | File Systems on Disk (blocks, inodes, the page cache, journaling) | [animated](present/lecture_12.2.html) | [PDF](slides/lecture_12.2.pdf) | [pptx](decks/lecture_12.2.pptx) | [mp4](videos/lecture_12.2_video.mp4) |
| 13 | Interrupts and Exceptions (the IDT, IRQs, bottom halves, timers) | [animated](present/lecture_13.html) | [PDF](slides/lecture_13.pdf) | [pptx](decks/lecture_13.pptx) | [mp4](videos/lecture_13_video.mp4) |
| 14.1 | Loadable Kernel Modules (your first code inside the kernel) | [animated](present/lecture_14.1.html) | [PDF](slides/lecture_14.1.pdf) | [pptx](decks/lecture_14.1.pptx) | [mp4](videos/lecture_14.1_video.mp4) |
| 14.2 | The Device Driver Model (buses, devices, drivers, sysfs) | [animated](present/lecture_14.2.html) | [PDF](slides/lecture_14.2.pdf) | [pptx](decks/lecture_14.2.pptx) | [mp4](videos/lecture_14.2_video.mp4) |
| 15.1 | Character Device Drivers (your own file in /dev) | [animated](present/lecture_15.1.html) | [PDF](slides/lecture_15.1.pdf) | [pptx](decks/lecture_15.1.pptx) | [mp4](videos/lecture_15.1_video.mp4) |
| 15.2 | Block Device Drivers (a disk made of RAM) | [animated](present/lecture_15.2.html) | [PDF](slides/lecture_15.2.pdf) | [pptx](decks/lecture_15.2.pptx) | [mp4](videos/lecture_15.2_video.mp4) |
| 15.3 | USB Device Drivers (a keyboard, a URB, and the end of the course) | [animated](present/lecture_15.3.html) | [PDF](slides/lecture_15.3.pdf) | [pptx](decks/lecture_15.3.pptx) | [mp4](videos/lecture_15.3_video.mp4) |

Lectures 3, 5, 7, 8, 10, 11, 12, 14 and 15 have several parts (for example 5.1 and 5.2); each part is one class.

## Labs

| Lab | What you build | Interactive page | Files |
|---|---|---|---|
| 1 | C programs that probe the machine: type sizes, byte order, a privileged instruction | [lab01.html](labs/lab01.html) | [lab01_files.zip](labs/lab01_files.zip) |
| 2 | your first nasm programs; reading the assembly gcc makes from C | [lab02.html](labs/lab02.html) | [lab02_files.zip](labs/lab02_files.zip) |
| 3 | a two-pass SIC assembler in C | [lab03.html](labs/lab03.html) | [lab03_files.zip](labs/lab03_files.zip) |
| 4 | a macro processor in C | [lab04.html](labs/lab04.html) | [lab04_files.zip](labs/lab04_files.zip) |
| 5 | a SIC loader in C: absolute, relocating and linking | [lab05.html](labs/lab05.html) | [lab05_files.zip](labs/lab05_files.zip) |
| 6 | elfread: your own small readelf | [lab06.html](labs/lab06.html) | [lab06_files.zip](labs/lab06_files.zip) |
| 7 | kinfo (ask the kernel through /proc); myinit, your own PID 1 booted in QEMU | [lab07.html](labs/lab07.html) | [lab07_files.zip](labs/lab07_files.zip) |
| 8 | mysh, a small shell; stack and scheduling experiments | [lab08.html](labs/lab08.html) | [lab08_files.zip](labs/lab08_files.zip) |
| 9 | a C program without the C library: system calls by hand | [lab09.html](labs/lab09.html) | [lab09_files.zip](labs/lab09_files.zip) |
| 10 | pipes in your shell; mytimeout with signals | [lab10.html](labs/lab10.html) | [lab10_files.zip](labs/lab10_files.zip) |
| 11 | vtop (page tables through /proc/self/pagemap); mymalloc | [lab11.html](labs/lab11.html) | [lab11_files.zip](labs/lab11_files.zip) |
| 12 | myls (your own ls -li); ext2cat (read a file from an ext2 disk image) | [lab12.html](labs/lab12.html) | [lab12_files.zip](labs/lab12_files.zip) |
| 13 | irqtop: which interrupts are firing right now | [lab13.html](labs/lab13.html) | [lab13_files.zip](labs/lab13_files.zip) |
| 14 | a /proc module and a platform driver, loaded in a virtual machine | [lab14.html](labs/lab14.html) | [lab14_files.zip](labs/lab14_files.zip) |
| 15 | a character device, a RAM disk and a USB keyboard driver, in a virtual machine | [lab15.html](labs/lab15.html) | [lab15_files.zip](labs/lab15_files.zip) |

### Software for the labs

On Ubuntu 24.04 (install while you have internet; the lab PCs are offline):

```
sudo apt install build-essential gdb strace nasm m4 binutils libc6-dev e2fsprogs cpio gzip qemu-system-x86
sudo apt install linux-headers-$(uname -r)        # only for Labs 14 and 15
```

### Rules for the kernel labs (Labs 14 and 15)

* Build your module on the PC, but **load it only inside the QEMU virtual machine** (`guest/run_guest.sh` in the lab zip).
  A bug in a kernel module is a bug in the kernel: in the VM it costs one reboot of the VM, on your PC it can crash the PC.
* The VM needs a readable copy of your PC's kernel (once, with sudo):
  `sudo cp /boot/vmlinuz-$(uname -r) guest/vmlinuz && sudo chmod a+r guest/vmlinuz`
* Leave the VM with `poweroff -f`, or press Ctrl-A, then X.

## Homework

Each lecture ends with a homework slide. Submit your work to the course teacher as announced in class. Solutions are
discussed in class and are **not** published in this repository: do the work yourself first; that is where the learning happens.

## Books

* L. L. Beck, *System Software: An Introduction to Systems Programming*, 3rd ed. (Lectures 1–6)
* R. E. Bryant and D. R. O'Hallaron, *Computer Systems: A Programmer's Perspective* (CS:APP), 3rd ed.
* R. Love, *Linux Kernel Development*, 3rd ed. (LKD)
* J. Corbet, A. Rubini and G. Kroah-Hartman, *Linux Device Drivers*, 3rd ed. (LDD3), free online (Lectures 14–15)

The slides name the exact chapter or section for each topic. Kernel source quoted on the slides is Linux v6.8:
<https://elixir.bootlin.com/linux/v6.8/source>.

## Licence

© 2026 Md Mahbub E Noor, University of Barishal.

* Slides, PDFs, videos and text: **CC BY-NC-SA 4.0** (share and adapt for non-commercial use, with attribution, under the same licence).
* Lab source code: **MIT**, except kernel modules marked `SPDX-License-Identifier: GPL-2.0`, which are **GPL-2.0**.
* Third-party files (BusyBox binary, Linux kernel tables): their own licences.

See [LICENSE](LICENSE) for the full terms.
