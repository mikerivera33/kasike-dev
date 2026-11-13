
(function(){
const R = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);
const num = i => String(i + 1).padStart(2, '0');
const LOGO = 'data:image/webp;base64,UklGRq4oAABXRUJQVlA4WAoAAAAQAAAALQEACAEAQUxQSD4GAAABB0IgQFH4f9yBiEi6NyTa2ps2UlKGwTK3k+kw80yH9P6PNQuNLemXzmJE/2VBkly3zeiupqwULIN+ggCOzG/yf4wHkau4Imr7ykTOSrp1FuSodFUsnQWRq4L8BjkrqeUeukSuEq3j3jlcroV8ZaJ376SrRL4K8iDkrKSBU5jkhtxiVwWFUHAW5KykkTvYDIT84VAenMFJMOQOuyrIV6Tkq6A4bLmBi0iQr0x046sk8hafTkhX6Yx8FRSXlgfSU9qNzr75dpXuGPg03q4S8Ty8xdBXST275wB89Ya30leUXOyZ2XMAvw3bbLnYN1bz6mJv/BJps+ni586t5ua34eih5mIf/8o6QbT5S6RNykXhl4gHLm7TtprHX48D0zerqbjYg19ZA9PiL5HRw4b8bHnAhxF5IFMYyTcR2e965H4V/dRmi8gUKXjuO7a9NDC9J7JEIy0mWvpoF5Exf0PfiXeLbAkFz/2U1Op8j8jKlvFsTZeJZja7w9gv8MzYzMitd9qYIhLPYa46Fb4ykbn5YvUlFgZsZqfil5cwRS/iPcvPkVfamCISjzHTn7vy5wDCcEiZCWPm1s/ljx6CK2/b6IKgfnmjTTgn3niJcBmYR8L6BZS5eC8i1WHww/pDIlP0Kb5NvCqQfmgTS6blqcR+zSEy1jB6iCcXVBKimFz4YPRgirhS7h5no/JJQr8wz6R0uSx5+sr4PcgcpzVN36B2RBRfpo8eeOpn2lMPVPqeLnMqmMj/MrBm9BCVFg8pKDp8G0Xly/IyE0wbJAzZvfAQnQWPLK9gwsOdHYvEGGjboDpvLQANTSyvJMSDDYtTXphY8YTlRaqY/vY2ILu6FvBZXv+Mh23Li8Vh1yET76ysWLiAb3UCP3rgvlE2noBulZ0t2J1JxiPLr2TGwxZsqy1CgPol+mq/PGagrbjLoFMxl7qp8tUDVSzIFsMB2jhj4kz5FwlgC6LHE2hzW33Pm4Ct/CmwCYADpEtbnxMEAdXieGLhQyMrJnZBfLHgNIyatygTxxGoYLxhjQeZFHmE0UiOQRvhwHSeIAmIFsszzxwwxLRZBTwseAKfjdYhEyey2eYJu9Y91YQei4ZRl327JJK6EcwmLyLNEvNwhCv5J/9gN9nlqugl4KtC6LDmwxyXZj+uu8asG3XPNWJ+7AOeMMbFn63UvJN6DsSW7ET+6OGoKuUGbthqAwhlZIjLh+sOKFodMFFhfI/rN4wK3ST9ZIZrOS4jIFRWZHXEcQHaHpBImXhlXtKuRKkNo4ebXCwj/EKCoa66XUR9Ij0qGuDNFWkKgdxqO/dYXPD9HXTFwgK/iUiV4I8ezgKYhDMFEJtMXDK+x1HYAS2LFHZvUBBXSTA76uOUtJ2z2gvsT70gUgAst3LRrdAm6qeXJFdrFbpkuAOb7Qg9EirUWbkLZicG1yxcq75RhoxxmdUgxudfqkCPHoT0KFMbpOy0drG6COZK8koywK72xfRoiycAP3cj5w8MnbdTWNG2QS0dSfr88wisK1vv4T2SzgUze0yMGdemLGN8s0gXVNc6wno0YeEeaBbbTzG+WeRLHx98NDNxhzDlCZwvEeG5apIgU51kP65ydHM/xgGEFiScHG2GIg/fs6KaZIfCuVjfprWKUXZHiyB6c85y8KSeYDsElBvrR/GdKGV3kKmmzb1jsT/0+0pCW9Yngv/80kEWDyGrqwudhwhXV1AW4NyYwhkIyU0hpXRHH8FME2iRavO29P9+5rv421nVlsk0StE8ZBqxE335RO1W/InnjGcOGJbTONO8yHQvnF6OObTwfp5pXSSI6t8zWJOxoHL7PcK5R2iRCuctx2LNpZJFJA8sIHKpBW05l8irBXP/Jx93TtWwz7MnA47LURanQNOztty5DmZP+W6yvm7f5VhvMYO3IBzMS2y8qLqqVMrCY+DNujPDMCavRbF6YfmDOEZCi0xbFpfqSv7es4CjTVKLYWh61OZkyHFaW+UJtg2dbuVZgHgf+Fvwm0FIZ5voSwY/uFLSlsnVW2hVa3VZvQs6Q0Jn39Ctj7ufhMI8znUe9af3Mvb59dYPH8H76vnxcXWEpazNCoGT1nxxdLSf7WfZ3ny6mC/mWbaYz8bDfmd30CvSFYLLiPzkyyj5R+ojAVZQOCBKIgAA0JgAnQEqLgEJAT4pEodDIaEJdBLiDAFCU3fhstkv8A/ADN0Z71wL4B/ZvxE/XT+jYG22/D7fvvXPbm8F+VX5qfLHY/8H+Hv7t/7f8/0qNgegj5h+vf6r+2/lb8vv+f65/MF/UT9bOwP5hv9Z/z/Vo9KHoC/xr/Qf/jsYfQQ/cb1bv+d+5/wif2P/h/t98CX7T///rAP/BxLX9C/DP9Y/k/5Efmfxm/Yz2R9Enzn2u/a3noNc/4fF3vKfGsjMaW+Nb9083WgnkAfxj+k/9bytfFW+7/6H2AP5N/Wv2N92L/H/3v3d+6r84/vn/K/yfwBfxb+af6L+pf4v/4/6H/////7kPv/+mP7l+wT+nv39miRBYrEji+e6/QxcmfVt38ec6/hgedN3cUuclBEXi0oDayNFSGkqTnjnFe7hy6VdBekJB3X+3dxSUOMNGbH5dp/O2KhHLDypfNQc091usw4nXcVVavSZVYVq27+PODj+veMD9/sudg4ly/09NKKgCmRpO6Bn4zIqO/4t8FIUl0q93DQTS7hyz7El0q900FH18cF27tcFYV2TDoX+PtNM8YS66ynJu4culXRzR+cXtzzgVbN9Ft5hIjaygykYw6R01cdxi5DLIWP8YRrS5rWAOsS5zPvdD3uIpxZ66Qt7ElhE9rHW73nJZEybbmISfY9Cy2/ZPim8X24PcdhuODD+AbHQBIrPYdkmoO0xcUnWC6LVGvdX/MYcr2POqAW38zX1yHB7lKzLTF9TVgi9x2maecV+7XsZRWTk3SssP0jJX8CSTn0WZ7V/znxJYQIgvwtW2pGNx86v2xf4zJL3gSRY+lQ+iMbBwCmaMzgShfbbJOzxPku0acllxrPA+7wETEjQucgSTReZoYfeqwzAZWNpnDzZsXI4GhOiw1k/dTTcNqQf+ffV6gZ/57WpH79+wbLW2/bCB35zdfQI0i86+Y0Bqzc385KhZ5zs9nEQ/SdiBPDL0+ddIA47o9CHTHyHdh5U4W5HOAhZL6gvAb4trp/qBbIW0r1N/tqIuS9yGVTFqLdTVN4r16BWHt8JrdeK7ilN3QRJ+Fo/vAQsts88MN5I40sFiIxbYp2bErpJn1Rxg1GBoV7PCRSTvKH9tlNpOfFEtnyMoNRd80QGI3AlZbm1uzd88RXLqwmmibZqwqNA6pbXlPPXOwjJnw3PO8E2WaYC2ntX/Hhln4GXCoJCSojlagocZZnyYTSfTq7ZnfTU3LWh7Zq5Ye05IlN06of8SNL+D4RJgmO150o8sHKMcow4atNom4bZhEA7PtrIfrV06/+ITnY4N/YvZB63BH9u7OOc3QkXQPR4SKQTAH6B9IQhvS8ZP0E7ceRICREXdNhgJJ+O4OyQQtfbu89DGS8/kB+psmhq/W5YX+n5nPc0as3g6zOFzrrF1PPS3oG7SI0vPqHp8cuAzmlZTYLeHNisgqhnzt88a7k/AofxMxXswSn4nXyWoueXFVWwlYQIFYv1vEsTNqSgFDuNGNCFz3lNCa8z12hfDvpBo89kaiL/+A0leJIpOhpO/JwBqtBdGiPm6X64kHNPl/NEjoIFOVFqyRG6hV2MYrsfChA5PaA30q4RydX3DcVy2LEb6QYpXrqd7zGdcd89mqE+I79wlPAJ2mADAAD+aRoAaP0gUBCNrJnk3+srTHCUVYmv3wg5KIEDA4CWQyT15hEFT+RuwGOfM8koSwxa6mqlzWiKoLgCskkzwJI3Df5IJnXgEz0poa6wBUfpBlzv6h4e89hLnQ0HlxJ8PsRJ7Mlq5+zGul6KZsn07qV4UNxeZ/GHr5nc2zklbbfOcfuKSoLJx3u6Z8AckIbR4N0iEqFcCMshu6rzr+J2EOeqaV7z9Kr11UuA/DvRWYlyM3c4hlAw+KxRr4tLCkyqmFAwUYb4pHH8i3jF8gNUkCnexJxcsyA4Z2tG7u7PFnB5n3/7vCSKGobzm1Q0QA1ykTgSkIsRSBu0aRdxJAIQg4sxZLJsbhtDKlvcCUWNuf+nociNN9CgbH+Fh9Ufxil+xKcy/zWUX4bnPBmZmTNEMIIGxJlxe12ttjnheqWN1ARq6dDe+E3mSFF0CSactPtccmO22XcZGf5Dt4Zmu7qAqBkEgeS1+sRTVoHPR9kQ9r7ipv1tWVXLe6RD6ssSkbxlYKMH3elYaRczqxvp0B+GFvkmrHqreqCTu5cIZdf2mFt5rdLqvqiYxmUCjd/9qpFJ9xwJDThoM6a9hVQzD7Mob1RBthgE0CMpf+wAdKXOv9zPoXyvQhc3IEuhEUsnvzehHd3+1hPXGiifKkAJr8fA+sCoFqf2HXTFbnCihm7efq1ePWd35FLm8tl67KVTH9TKUUBEgjSSJdhyYpQXY0PTY7YraAISqG2DWC4nndQA1/gjN/H7Q8e87VSmxAp9RFtSRkjO42jQ97w31k5kIfN6o5o0tpit7mbVRpMvBXj0u8s7JuDEpwwUgLor1A6IfKy42h4nZ7M7DfcdYaeaZbZVSjyRZwLIzSGcuWWU/MnaZqMblHLgPvVCzUlW1wSGjqvHTzJdOatBvDYxTkUaWiIFpxxcBpixN1cyN06P/t32cnNstU431PxL30tF5dEIAdcn7gZh61bCkalErRzzTIG5eK1w7fDpc0LAAqnNNih6317WFWQCrzvxoYnkUUuaCHRfl++KM7/u2SAQkBV/bDva9+tuFgXmfda15047iDdeoLqR/6AnOZ2NAboATpMwlzKqDqXzK5aXyOrLxh2yNqe2aBcAFHtTQzgSTQtLWnX+/V90tQiLWIWmM6U/Q4Zy6FtDciLVvdr0nHIb6WpxVVD6jXO3WGe65v7kYe4irp39mqv8QeSGESz3K32TYOH0Q2As2Mv0DHZEA9kE+OeJF9jjgz981Dtu5uePUTu5tr13D1LP+ffKiI2uEpqiaBB0muxpaCk/B8Ou/qNS/firciuVOXO8J/EEPDx4+6mPMYQDP//mWRTCxV5HBf7S9nQSNkfiW8NyNwHBbUq+cSoBgXYPXXsUxYEYW0M+IugJJPGOfv2csdkfd0N09wzU3PjVOCC+4k0RK4QgwdS0Q+GVYcnIzlQidSKmyCaJe/1xiYlxh/L9lVdJwpZ+fVS9Ofj3ea5WTGg8FFNwRj6bWMoL6EMDhMuW/4S2zMLzJFQKTelVjc5yA1LWhsauRZTvPbuHOeJCPKPdd1/mD7g7dDTWGmI8EWOEwqUoSKTE1OpOHB9uglpefOiVzgUIX4T/ii/CRRcIoNM1rrzMQ/1PDUhlmNe1otf+3hq9/9u4SWF2+OkyOKFq8l3cTkG1OIVrNtJfIcNezOcW27iVuPPBDKgSeQNcnQwdF5Vz1xmINph/9EC/fhAftT5uVQqnDxmolk+18gxC313GwzndP0wPP+nZ3Nzb/wYa+TZY2ItHAgPcYEUAn5M030zkVEC7EB6gIJ8uxC8u7j9QwZUrwJOhoALb5v9olnzAm03mM1287VVPqzNQnIrMxfM7zldJ7Lqyye3beN4N7orD9k/uXlTw9833Z7K+eNqM4R/3uK9aRBw8fph25KxqnXI34f5ntV2PRiS2CJZgcSktRU5TJu8Sf2mX3L+yFbIPydvjCneXsW1C2u1Jog6bGzXe4UGpBOxCyV9DqH6vv26oKfMlpctGzuZMNRoJQR0ZI96u6nFobhbwNvyODqgGQuWsYi58i5teL8IgdSkLrOiyusm9eoyY19HxpQVRXR7nFCuGWrHaLQcj9JMcs9QJcJP/Iz8EyPg9u33n/9ZXKX7Y3jyxz6gfO7zMAS5D30H0wZzbK1Zv9WKEk7LHoZ1BhWwmVQk5S3uqS8U8aSfyQq0NHDn7q64dmiDwA84INk1J/Mt/DVFCy/V/WMS2wAb94gYs5N56vwt3/mlcvXoubTIqWUG3qFJmul0x+OH1Jv3YtHtPHt9RkHqsFhvrPT6rmQ1qhZ8bfP/egLSw+SHhf6gb50aiw94ym6HG3OL2n3FGGzPLFXU/dMErDzcTNdQdAETJW36CxganO57EuLcwtdszq8RgL812crprihQG9vYHZHe0oWSj+708nGLuTFoAdXrnoBUUSr3BKnNMosfVhembF6gC82H7v91gia7nOqe+I4fOMZzA+DSC285r1Pc4b25TFGjNIGKbh9t3a7MsSl4TmlNMilegGnDQkczQV1Wa37xro/19mweoBs3W7W5O+8XAEmsNTToLid21n7Mbw/2TsO2UwuGcnlmO/l7r738pN5Oss4n/4tv2dN8L3gJXeSdEXAKHkPPr+82OZjxgc24KX1El7exUF9bxznYOX33nsMvMPw0EwZJY1yA4Rux5LpIbdnjFsEt5VMOBXR1yuVBRExJaRI3xgCo8KS8eBdYSeasSMOEvd2kz1u2w1fQ0NBa2cUf9w/O5nufVNqUY+Aw1L17jW1EfNrTWpO0bNvpt5WG7UJsg2Vt9Etj4XZlrrTxtnLY8TiuEv2kK7UU27hQhmmN8NXBjgPF5+rde77Yzfas3VXiITlYaqcjIWqweK92wQ8y0Hf1xhRvsD6wfjxJmMRWQ9nlu1foDxB6w61bjGxBnwLAf9ao/+nkOBD53H4M6T2XzjgIoGwYe1BDrLPb8AcX5t6abBOCHaEUv7C5bpKMjHVFak2b9qE6WrC0BkmKuYBuZ+kFwVO7HT7n5YIZP3LCvRMzToJAkVjmYanc+AQ6qD2ooQNTCumhLRs+VFs/+n/TbCcYmkK8wtx6YTGQkq7JbKSEtjVLzYRtEpGK42lTmkfYezBqCNw/fKRNPdKNSkmW3iWlWa5XHQVgqTCexeH2ktOvOz9ibEtB0AEQ4pqD+t96G41+DU7Y9mWLuwOLsBln5mWbFzC8kPXD3bFzAenMMj+C6q7Sfs+4uwk/6yoowayTTeSCJk+j+lwTz2HtttwwrCqG1X57LCx+YtSeSxsYPXF+KI9GxQE2j7V0B8LbXJ+GY4vycGCO8UzHVNOfNJABI2GTyJYW4lsIFDr27ofFHmVx0ZehalzulZ59UVFsMxWs3iJlarcLd//L20OszaSVQs0yDEQh79Q0I4z1q/9GNBAzP1NDNc6W2PAoefwnzuUZ5m++TWrylJ5zG/Apl1/QPNlDv87fXl3nSGRjT2V0wYOqo46wt6Sva1eN8Y15SgUAZzSD7+hwL/8JqOg7u6sh3ACkuQvo2NTSB5TTs4skzYTC0Dn/+0ZV8k0YWj7TxzzLNhF8SyXq+J6LYwmCT3RVbv1SdCedOhCF8aXC+iC7jHqqQhwul1iI6vU2JUhzWS1QaCMV6yfCcaMw3PFAgntgOtKpeherk26HFOtgKlYNtMrS6KjV3080/3HlmiRD69fOsdaFq2ums9tcbD7Tslv8ebX9Yn6SbJv+Pt2ihIHpjmNmAU8GVURxCKppePykkPL51eA7QcZBnm6cFDD6NJZC4f4u8v2UzKIrmHX7Dt+aSrxml0BcCxJV6XCIB6T665dCiBiKhp+3T+46m7bypczTb92qaZHamPsXq4rfb9u+TGbFNJJJX3lUn1k9cgjlEzPLRmyiZahaqj3U8RZ5m7f+C8ViGL+5bdZFfj2N792VMyz7muIubdLO9/tqP3AQacaaI9wZL6GJ8qmEs2CKDhZ8mqgMWUwjYlVV/j8PPh8YHm7mZwkjKj8p7cOa+dklZc7iRRJfwmaMdEpsCTOiAred7bXjEp/8cFzIODvzO7y2EAJ+GJjCjsJJ46Oi9Pvpx5YRHY8aiMy9RaKbhatNHm1UNTZHq/tqG8zxgAEuFx4BX+dcKEaVkQPVVsCPiGi3KHmtyh3MtLdw4wa9QBTSca3EyULFKfgrkFUkm73wC6iq4De9ZcAHFZ0CwIGww3cAE0krNL7hfIUyt4a7ppx5kag/9xtx06capt2VU4LNwvGIDozFr0jb3cXb/efN+m89FpJfZD+fWV1qeLMVvqwS2p3AdnxqeFcCbuLUGXqg8+bk0VsvW0q1ktxQYuBUWQX6Ueez+QGOZfCFRQddeAcW3j1zNy3//7uo2p4ObhEH8Yz7ONyiD9GG1XUD5VTR2T6AlPrAAZhBZYbzlYgNfWsYzXIE3QFNSsehZeKv1RER3v7eOMMoOIvXDjdqa1fPDyMsBGyKN+iw9IFMT8e/zMFeH6wTjlE/dx3x4hFb3J80LjmQD2TDV2X6yYLN4/jSXKGSEsAd9dpQOtK+zeWo3nDqCCL6FDrizDCiePT9u5GqxIwyjYZl0q2561xowmRyu93s7/bPvsCIVCY9ZJjuDASrRmwTw59y8g5sbNPYEo+kAKeGCeF1Gl9P5fPcgpvqa1qZmULdfqoFPxgCp/byYgS0YUqC/amtK334UwNESAk4pnJ1duq24lHXBZuk2gR2hzDXEv9QM11tOCejh9oNAFwNoakjjUEbPtWE75iALxD4sEEGCZUCr2VrcEB+XcQqlht3NLyGQL6EOITMGm94iva5//f/r0m1zNom/KdBmFf00y5is2fYFsybM7gbO3E0koFRmitKs34cJMHVes2pEdMpqGlLydVytvbO0dqDe3TVuTS0ouLVpodxdLq367FxTicUP2ejmH1kM74OS/VcdFNNRa4pY1xJUKV0B9+yjIzc1s8+Pw78PILU947Lb1+C9KLTMJD7qVz6P0BBbKN96yELnvzK9Al/894LVRfvkPzYGF1aor9LYIYL5ab0/eS3C7N1l5i/1wY9VhlJIsztyy6F4WXKkQsfdo7kMWsTjXK1tqmodA/vpftSk9mFVQtgfF/l38OJKuQwtO4ItzDaUV/d61aidky3S5c7Myj8aVH3OmjSb6BnzmTwGajjRxs6ASM6wtAaYuAnFTG1jekB8umbSGa9H23mLvuV/fl/Zi9i8V8Lg/6s/BR5Cf0lg4bX7QZD9gLI341s6ZLFu+f110CqEyLzaZ2HM85cIFJfBXKj/B1NUAl833fjCUs/bPpnB2uvEosRIW131v11TghEVYxVQV01EtdIBnNR9DL2CtN8qe9lFaNKSmsEaq/fFhPR0IHp1vODKbU4nP7hDJiK8eGc7xkOx9GHN3adVUSBDVj5kd8pNqWdfnfjduGNFfhruU3EbkFIkOJkOIZsqxm5TCAbWER5TS78kZXEdkmSek399WIV5aU+gsEspEPt1NVtUfBmVnyXLhc2Ram93+iW1GLvJPlrvcYapPqUBlG3Kq9ebXxHrRSHXRuo/EZN921HfcU714qplMnvvDobT1DYJnavrBYCH8Ro+lmZRquMJl/HRpbeATMunR2r6eplfQBBj8awgBVYt6tdDQYoz8i7U5FBsHLHZLgdLBt5WBvOgqslxveVp+O3XCXi+C46Qj7cwmg9OL2DsyaEuX29E0/y41XnR4ywOYkXvxfoB3LrKcbFVUqPYcCb9Cf13w1EIlek4J5Dtw4KVrRzollH18RGK53PbKa+qYU3X9tAqwl5vfRExh8O1lRusQLGJCF8/n0PTNISI393rPYrEusXLdB7slmuRyVc/d2+h5TCWAQTeKm5/VHzBYQfgNJgcnYwWenjBbIo8cp5fMfhuW18bZlcs2jvwx9VYWfYH26drgKmtl5Gv558zCxZgE2EzqSIhz64VeGTtsTxvv/5J5LI0ki0TOh7N/CsuwUlkJEJ2Gs+gnbJJ4Hk+P+AeGRs3X12AIMHQLudIA0Px2Ym9voQ5rSUqc6a5C7P1rPEmv4G62JPDuLY2jZsxZTu27Rbt2AA+RR/mGZb4bu3Yfnza5u2ILBk3FbDillUbnjfMUjpPy3172nviRNhj6jQZlL/EjXytTsU8MEB+HzIH5GTl41lHZt50SnD6xy1BR0zGvKtG5dZLlZ9tNeADzcHVOBg9W8UhOwoAeWkV8uQ84zgfhdwcteOToyrU8kaW9PzRRHpHiXt4TNRh6wl0FiGMFb4zaKDWeN3YaZb/j8bsDb5V3djT72mxFM3nYPT7FqYSO+KidTEYr+qFf7PttNXL32EVr1l3FV93FBIbgftpCt2yuLAn+mwwPcc9rXUYg9lw1IIWjS7JYmmowJTpbqrG3mUDCaq1AnhN8S3gdwMi8ruwtx+cN3UN0/1n2Lz4xMSjbKJyYWPlUkgmm/qJ7xj+C2M++JuI5a9Ad7dcHflnPT/LEL+RGQIhoHB+iRnv/Me1NfPWV+cMsVUni3Lm4MIPR7V39HpcoYLXFD2tJ3kdc3qZgWwshg3rQue3WdC+Z0EQ9r46f7KwiYWxRkUUrnzWFicVhxTGDhRdWDK0Pgb/Fc9N7Qr2zybKBwEVhBTim3sS38lZ81WiMMItsbcIjyVM5E4dQJ6J29eCpb4oEwpl9qiwv/eeWZWT4DHmuD5y0Xqd8tdT9Qu/TqpHFH0tx/wTxF+kA9xTyZG5FfeTUFULzci1OEGYuWCYmLU+fzfp4sRauyn6TId29PM8djXGKX7NUPCdWQ0rbl241ReT7oOzIXU15gIgfk0D1KtjMVd3gT3IVVVvQe6NaaZ3epDftklNl1ED9+ZgzIahspJVIY/iqv0AevlU63bOz1R4fdGWcz5HMJIX/0n/9dvjKE/18pESHIlk2ZGT0kGEh9c+WhJ0oq2UYp3ojOkJWXQocOpPsP7T14K7DT5iPEJ4/Yk+FvmmbjKesSX1F4sqpZJpSZFwwUWG+Pu7bEfuBbwPvaCvklmMA8UlK+vvACra8p2hS2qpM6RpIom3nR+7TQdDmI4eHbSZ3YaV/G/7dRz40+QjRmpr7vpWPmxqrHaTarYYf+42KR/kUUrWnRt6/j8H4r8KsUb7EKqgiaGAl25EZ/+8dfuDcdwOnnaUvO5o1cVdp7W7FYB8djT/vw4b582H0s1aCXRV1CdYfJvfaMe0ppIm4jMTi+YYxxGi0YBTVyyW527p8Z/jdavdt6CDyn759KzAcgEK4Ng9UJ7ZQxD4fBLw2DkXtCsZmxzkmSuxTlxnJ6Xu/SrvXryT0SWAWV+FCB2GtUc3LncZQpwXDPn2GMvvxSvAiLDChtZq2a2Kkyp22We0MerNrAj8EH0HQt8VhdwdzmahqmgSa+9dz5SgqAcl4fc0iOoLLp1uc3nqvQzxph/TQGkvrXCVupCzybCsd/6mEmMTAImih3Wd0INtqCv/XA40JGXbG9UotzAEPOYI4f5zNj48cJrIyldUXWTvhFeP2P5p0c0ceEQa2eeW2mU6rrPQz9+00TUn0TZ/SMH/x0fm0UonV/nXfxRNNQ+0yVxu+XpXdVY/DSP/db/fn1MEA/MpGw8/dUHkvlq1UhrBkCnludBZ/J5NO3ngLHg8jZUfp10dkpStOdssMMOQsKXVB7ru+/+yQkmhu7CNBoI78YgvhM2/g6v9ZwgWimgcqHi0gnPMfFnVPFCPiLUkvq1ozQipqISU03EQS//zXJYFeLPmxEldq88z1dWxsAzQAC92D8UUBQ97bXnO9SLoFDnWqED2yCwshTWJhqO2HRygzTmSNKeUqlgBQLVVrZ7ii8+v2TBjNnreMFARpg+/TMpXf7ulSscL+HNbFETqVzlGutMbeezpmn7b5HQFvtMOOkKVwLba3wgykq8FZTMiCzEDiYevmEdD/2VhFGOJ8U3A6FHPcXKu8I+V1sC8PgMrnOIRgOpi0BOd8wJdxNW2OnAk7AGbimnVZaM/UjHI1rnaXgUkpVjEmK3A3NyVnuwyI/aaK+dBcAjXq1FkzJ2LdoKuU2aBQUlIptbh3sbI0kNTX2KaEfPLyjrnGO1GAsxU3durGHBooWjNYp/8/l+AA80dM8lxDMbJ5MD9IS0Us4oAYwsBqZhVizGvj7QpgrK/9cDophCxpp7WCSc1GM5G16t6CeJxkG/7+o8sjI3bbjdUpz3QAGhTXDpoALodMdbpKIXTb7JpSISjk/FfRdbtFaXN2NTNw+QTTyeBxHYJZgcx8NYQIk70FGwzKj5zOpWN2dKoOfV1QeAvtIzshk68amXIbtl0mqNT7qnBvWwZlKkbGr2VZwr8WWbl/J87Gp1vSRXGvm7rP9cP2KmZGFVD2pxKUsB/SfimEmXP8Kz5oSu+VOKKJ/HPHY1WmG0G2It9LBr5RURMc3scNv7Y/bo1Ud9fUgrfWYF08DvhxgvaJu/RNo9pbNYY5G8QUTJzpZcasDdsra7ib27/mGBeM22d9MsUuwfO7wglZaWW85tgVQBSKyQ6LUVnWzmAiNuqD/J/CPCmdWl157OH3YgPpGtqlCtLKRRkhqkhQCiw+a35cwMeHoE8IjVZEDcCuVxJzCCj2wU3E74iLf8ssEo8qRj991up26VRyY3jQtzl17KVTXyN9ZN22XKDMCf+Zwe7VLtcUocGLYTKWp85VfTSgLohsoeHnc0ss4/34Y26T9d49Qd5B9xV4/dd+RnbsW8cwTMl0WpzEmEAZOSdewrEueCyfwQ/aAHpkzG7jpDyuYJtKGbeDWGdA5hx+Ycyabb1q4scmQRkb/VUUjrAWAmM3tGSBbuVu7lPQkQtmr9fn1BFDy+Nv5a03n+fCkZO6wU5lngoj03hTISQpI52JQkgZ+NDj4Q7PeFyWXpeWjKCzQcAxgtVjXTJDKeQCLNlY1mDbU5HwxftX0CQXQ1vS93WlrALuCrHa+cf8IN35NxWucpVjpGv//hY1Hof1QZSsTJBFQI5vJxrb9vEUSXpaCbyWofASkw3Rdew5OwMXzrr3rzLCesJM3oq3jyoIS6am+/8ZFDa2XHuVgX5D69LSJd9B+GSmmUD6Lk/+peHaqsI1qKOQW+YcaUyPJ7qO9RgvGnUU/YUZRNHlmq6cg8Hi7AtSstwheZZ0G9PCJlxeYduyBPe/BnGFB9WOgBVL+B+EyWBCYJxrVn7wU1gaR6bNgXOYEqpwnlBDvID0E5J4XQwxOhRzd+r4Ygop67ZgLAWSltVPuOTkfDp7W7+480swL25gSfqPnhfWweVZcgEhK+Z8OQb9xRvPclMZEXq3XqSxWvavACry7EEKsRn+pHnPM80NrMXM1cD99bcSeXfR9nklk799xQkfRjRnmpUEdTqTJtSQjNg4pqocnwrgK+z1z/zRF2oW6+vtyOKmlcDtrIVLa1WW8djaD0KqfZ0TNdMjcFJ4F6wzX/W2tfGS6pjXDY82J3tI4jgaB7FqgPotjC3AjJs0JhFeop4y53v915FWEhb6+VfRGFZzY0RS0SDdzkgWCB+w+iBnbiu78AtZFhkMX47zf1RoJAS/zCvn5ldzEG3D0k6Lr2cgIsxqf8hXSvcGnkdugNdMitWSd8aU51Fcy0d26xo/zX3b1zsQqF7sGMUkZStzchsp39REJTp/aOFNdo7SERxSo12R5Iob3pdzPtslkPm+1EaGjLrP8Fsvmhr7QDPNShPyc/4nk9MXx6zgLVcq85HTBYfT6a5ONaqutMNEWzxzDOz2LG95JAiIHLCUz8QmbORkdMEP5U4aAqdCrOBK8Rw6Gz6MBLuET08/eHd3vJ/kd5O9C6Ro/O+UQQ/fcD/uE0gnbIHdDxJ8qlLBhAWH7GWD/LYlQbxH2zf8zHcVZ2fQY08KB2DlCt5CiTFGbKsjftrUsKb2g5yYENg3o341MAdsD47yFoq/Wn22NJ/P0yxe8E3n3ORl8NHsTZ0C2qZ/dglqbSbjBKksEaq8Yks6mX988WVR5qqhbfaKLEEEH4BjESV1ib722VQleqAg0mS3uCiwOBthRpr82rS36kdNXBft78EUEeL3DSoTDbpOJTanYFJca0Z/iFMWBMIWzyLgmOzay6+QoZgzxnQdMHetBciiI1CCeygq0x5xFZP2o8Dc35fwaAA', KAS = 'data:image/webp;base64,UklGRnoiAABXRUJQVlA4WAoAAAAQAAAA5gAAlQAAQUxQSMoHAAABoAX/n+O0YRWOpliSe6UI0pNH996tGclk6Ex6pcjpvffkrTGj9B73biwGOVWmTuAt3RWw3HBhOCcHNmduNdHu7Z1O99+d5CkiYNG2FbU5Nxb6eJqhZoIHr99pgJRx9SNdQzhuICyHAx4HYiqN+0LOee/3qHFjIpV5HjdLTsnB7cMhWg6Pb+d5zRil65XKgJ8h3/yCcYzD8bXNITndlDx5FREZGxJX+7v3NYUZ2hkKlgTow1FNfLRQbeMK5vv8RIHKV7oUE2BVkZk619PR3EQfjjQRAw8tpK0kGNoZJmra191PWkxU2BpVFf3hEk3F/DMgylKcaGvu6Dkn01JUHLdAjMOd72lv1BsQt/xdlKWxvee8rKijWKe4laKaBvQGV8KdS/7eJTXEMkC1xVMnrOkMNUu83HFHjqwZc4uDH0aJRdO3pdwQ/ZB2R1zxuLa6IeEvMyy2MMg6d25UEPF4cNNfxD9uK+nca5fkZiEuWN3XJDw6Y0Nsf1u5R0PV17glBN+auyRo6GE3d/nApiAxwreG9us97FoZju2njdCtB2SGh6CMKLuoKmEd1tfsbiyfIcHdbl3Pstre+EdosdsBdztMW0FU5GjwmmwEeQMj9dim6lwJ4tEKgW1xPHwgtNgFr5ByqxgbHNNPNV5whcO9JHRAtwEy9Xy0BFqBsq8JRmV6g2S6EE0U0GzVm46RPheQBTwb/heYBUQb1AKgDWZRIEEap2igbCCLo6F5TgSGcWv3DGhxmGjnd/rcYJC8wXYFAwXLzSXjoYBcSz7qVeNQUTqCYHaWCmqiF+gS5s5gGpBzfqiHlKAbYHmLrkHy1lPeomtAznn076JrQG56cB90wxoXCMaXNMsYMlgO+0E4St5ghwKcSMIRUIvoHJFrDdUiPEfk9u8lLeAdQRCGDpb3+t1iJAyC8SURPgDjWFwAyLF4AJhjwf9cAuVYHPhcAmVPHnwuAQIHPpdAgQefS2C8XXNhRwhv15wAxNs1H4Dwds0JILxdi5EwHwh4xEikfGoGEiBK1wsrSai26Iir/W0f1y4hFcGBSaj2h3TF3nBAGrNia3hSyc1CdoYjlVBVUTayMRypHFh/Kwm+Bw+EoPTDm4PECzxwgu+hAyn4HjTAgu/FR1w9tvnWxPWIDzx8ZP2thVnIrnDmetZX5UriI67RkylE02+KzU+mEMuo6uWhIRWbDtcWCZfP//5L/wiZ928q+l4g4EtHtn7UdmqQWsXBTCGSH8e3PvP2NnpNDjPR9wJBG2i8Y4VPt8KKmeh7oQR23DzN4/bkVUZkbGJ8Tiz4PQ7k8JAHwMT4nGBwI1OjK1gOCwnnvNDRESw+0qT8+78/q2LxgcYseGv/aZV3YDsMw6VPXvr8z6wDY22QPy5YvaRiG4w2SlNKGgc0xpJkg8e2rHbxBe3iyYMnL+LUB12hK1kTAdX+7sjWl2bmcAVt+MjOhsbjamqDrljTOqlvD9o/Xa9U+mZNSk+zF6nfNt7je6ZrCKc+6AplX1P3Pfn2IA/GdpbM8DjT0zgCvtS3q37O3CcT2CDoyuFa8NrWMNHWl2Y5HXzptbh8ti207pZHtsdUWwRdpU+atcZPtIZy4wn4Uqw10hzpjA2nfEfdxalfopRsXPkxKsdODciKqtklfsUOC86auwfIE0i9+fKIqmHMkzAdE+ejhFDG1HIbhApi3gREGr66+ObmjvF4V77QpWARhbeinJkv0e8VOxtunb+i9uO2flVIwcrItXrLsUFqMdcDO97+Itojq3wIPbdncOCgRi3mOnzyQOwCWS+MGxMJ7PjOxf4+w4d4SNvCem0WI3GxsVeMuNbsODeKsfhwzn3vt3NkdW3BkSbNKHtvZ6S7X+UMNl3B2Ff5areCBUcakpwe723f/80dbFnJKFzXoXAGEHN7+DAxDcTcHj5MMwQxt4cPk0ZBBNbzYQowCLgwodvO8GXP/z3Q5awKiAlES5+1ior9EQ+sjFxuKmuVPmcVp0hdOjskORkZufwBkrWKkbOKIwQ8DsZJbpTOzuK8MfqMXOEmfdYq2N/mk8rWxzoR/H6fBRmyWOebI7uoqqGxnZGRS5+1CnbfjMlsfayTnJnOrnjujKwkLoh5xo2/7tb1f9HpqjA/HlaT2fqMTnI6wVt7Y0NVUbbZRIxIcrHOuEDpQ5sPm84bw5NCVWQTJzmd9eyv9bdeN143ZmgiW0wN44xrinTqUqrwrsKSwc3Rhg5vfqiUTsTokpBhtpgo64xLzeA1b6bjdUaoRIw1ZPKhcbaYUYM/C98v+kSM0VD11e50wwwjQpHu9UE+sLFuweR0izKMcP5pc+yHNxeMQXQH2nt/kU1Ql5Gz39+fL+lGZc5rcWEJj1ATKJhjbMKqDuxZO44mLDSw0l7vlWwNZ3pY7Qxf+sttDV9GP8RI+D8ojLgxGxqwlUrJvbF8EhsjClBRsb0ewFFVka0T6R9hyaJ7o6iaxehiOpv2dfWrqeg3MJKZ5PvJit2Tx1Ty90bX4YCt7WLVRegGKl5ou4BT0gtkJON/pSBZsftlDZTsvaG6j7bHVOtndzndbs/UlR/3qinp0zOS4T/GkKwMetkNZMG9GX/TQx0KtrzDHCWUUUiWRk1FD20SckoOlKQMxkyMZMG9uWJCaUS2FtZCt+QGp6K/PRlZO0pkpViDgtaCAFZQOCCKGgAAcGEAnQEq5wCWAD4pEodCoaEJFJrgDAFCWMGcC8Af4y66ms4EnI/xjNj6xc/fovxl+THyg7hev/M15//2/3R/N//perD+x/5T0b/1u69fmi/bL9ufdW/7fr8/aH2Df07/9vZMf1f1LvLl/b34h/3I9I66ZeH/nJ9p+2/sVZ4+s3Um7J/zX5nfGL+q/3PiD8bdQX8m/q3+j/MThdbWf8X1C/a365/vf8H4+/+p6MfXb/Xe4D+n3+Q/Mj+7///pSPTfYE/nf9I/339w/Lj5JP/H/Q/l57tvpf/wf634D/5r/YP+D/iv3s77n7VezuXjlz2uYEtQVRUXL3MPYse6qUxwqGasXS3Y7rv9jXeQCG+AguOrRxvsEdSbEcCAvDzWb1dmjq6Ak4B2wAzZAR5Xz23MUC1sZLEHbMG3PeUU1r5e/s0Xwcjic3MEEj9iNll/htGPV5zd0wB9hvKC36bDqwEQmOMvqP4MeghF6w+ZrP2YfRa/xFgRuOXiKfnZsUMr6iVBIrOruY+UE5w1k7a76Q3LK57iO7+w4M3LtkQAKK6VGQMxKPmK/9YyR5N8LuGY6dtc6j83zQOwf23i7T/ZF2NlFq1ZbJLJ5DsPWkxSn2VvkmN7Km9kDZ2QeV3h8IUmXO2/KvxFFxc74Z4VxLuz/mjeqy/aKPUyl2jvvYnPbZChMQKjglzEp6yqTcFKzq2bRbUyBncOt1ztl6uhDl9U389lWcx714jWu1aSrl8HN+tNmngvKdOo01cIlhsjkePmBqXfNpzf4Ve0pOLoACyc60wQBZvXvTe3w3K+sI3Uaz4jnglI9VTkTE8Y4Up8UDmdCH4Y7bj+jVbFq7FceToC99vCcAH3Og0qbRPYmmKYqaITGUvd2yeYx3BiWnboAgyiHFpIXz2zIqTKy9l1TcwCfkY8S6VBAaWWYzSsox4eanBk7CVwMJ4X6L2IFkckrVq6DTi1R6B4zvxed5ZdNNa767oh2SfRYPejiqP3RDUQS7NUBSFXCrAxp6LPi2vEIEGQ1NRYMFz/SBVZMftyRV6VV7dzw5sMRoAA/v9bWoHI9qBpwcAH2iY1CJBTR7ahVF9pl/lpNaLq49CLQ5E2Lf+RyB6uI216G22X8wYIGNMEQhtF/ZId6xFZu0GZIdMRk7A+urAQUUzFIvSCVPyYryfrKla5VErO+d9fj8jzzepFD+Pme7HyJyFqw9tZSmQGnfXJobM+WvL1U4jODcr49eQT4OrdPz8QssxJVDWHyXdMktzRmkwLtbPNqGHWsyxdeg0BTDEXBgnrE1n/0G6B6t1sU117h9YmPOqKJVx8XUT51RpA3zb/ehQg7Ig+mLuNUzxiJUu2VGf44FRBlYaNejXXBisQix6iugT9L1TILQHY+Xv/hQODF/9u5e+A0mKun+dsAicNbIMkB7smkIVCLaX7hKx8jeVyDHS9JPxZ3BbtOrqUZVq8k1x+hnrjTUKOMUguKnFllj9GB/AdqG8Q+JPOr9YlZNjDge9cZTGFCU7VOvEbcAP47Iy5CEsk9If4oylZ42sEjqSyVndhKDxp84rdOa3nOo/zMdiwGYRPPRW2lEkb1pQUjSbubP6o016K/lqQCHQboVQzVgTlg1BhH/wcJaOwhfgd0SRrtMdS/NCuZxOyvxvzLTSXOA/K3hYTiBBrjP2P+yqfDZiU5LMxFmVXthkwX6Ne2UXlQBLOmiZhExWxoTrbTpDp6OLNmyZ/ITJyh1+mv3CGa1N2wJnIstg5HESllIBEy9NZAeZLqfdAdDEVYYRZKoLenlOK1OrX9teu23zAEmSnTz+kbNcQKM7KOR2hD2yDHC6OMHO9Uw4sKfeq/Fu2/NraNmb/T/M0+CEHbFK4P8uIOCvIfjkRKCrP1i7NdRVUCByX3Zf1ak6FsCWSAHYQ0YGDciCZMoSFoOumsYqkz1zyAvLu9kXvtBKcREZw4GQfCKJzZujyLh8+HOSNxenVEV/RygLIO5O/wf3EzWzeoL4t3WxTeAeENuk/eT/PuCaYPVQelQFTL37DFSbQqK1p8kHcGNH9KNZu5c7Rg3wKmeVrmiLZI//Ke8BIRGxAV2jXgGMCA2R0CcYFV4/nCOnLb/FzhT6WAuQyDkux8jPCAPt54qaI2iAgLOhItH9RqyRi11YPQd1pqx84bOkUHjELrw7ItFjsdXur5HdGGyf01qf9TR9ySvQgNVLv+JEgbpgHYJ/gOZfKHTiHp1v6oOeRuw376bMj5pIvrkq8pN81FeSwCt9pnYk2RC07JtEtNt2tdX8sc8dAJCeDRV7Z/obLMwS/RtKIRBE/g1mjpEVhXJ6/3wVHQxpN93UHlQs3Jk7LCoYr9Zw+VUXNJ/0dIgKwUGG86KfidazLRhxmhfeglxKogtiJab8M1bbqShnVTYXq2xDcebHYqGdxyOkhN6FAGGSSGy1fQLnSE8DjEjSVBmfUzu8kopC2qyn9xxDksKFuCYSOeElWWsMkWfzCFsZhs/8Cerajw8IU89sn/241nxtehgN02oAbcQ9FRF6HdQu7GtVzCBNPCcaSmNtXIQoHdRYYki2rMV+Y02YNfc2+IA6pvKt9I8NiIPBxHLhdWNrjPzzJzpZf6BS8IRZPqVkr/ZW765tZWnvDt1w7ufu2x7PtvkP3/4OQv0eEUGuFvkikdL5Oe01zgO8Iifjb3sJA8xco03/E000o40gneU2u81KRKWr7XDOaQDwt6/Dgjwki5S38EN7bjgdczmTIRqqOnHbGxGcYVjWloV9cI6XzphLIewx2suAb5gN7HZgzZknPCBhYMlP+8E1warzPMyvKnCUEzcwoCz3EVfyJUKNK05aKjJHFEe3MGp5DZhMzW6AOcQ5WTPBnT7YjqgGIAaYM3Q7WsAMn7ZEgyzQdsvX/kYm4mW6WjWebJ3OWZVDn7HC9YgfYGcKRSgNbLMMLlEU3yozEGjZTWuZjYZDSKFXDA9AJDfjEJ3QCG4iiw6kX3tBQgF4UqP9PZgYp+FMQWyc5iwzLXr/S5DXw3nSalA5MBNorqj6O+MsFKiI91JBmOie78haDKLiz3WWy5+alY1+RMKbsThp4i9SZWKeSlO860Z82lAsSOHnsmFUAgrAfvhc3VxqAg4JfxmHgoX42S4+uY4J23zThc9ZMaYeq3ddWlNyu2OfJ31bH26iz/vKPaYfiUP6X4wiNwKwPZWsN4ivGKSFxQsN20NB1hFhdBdnx1f/h7dc4jvboPPTiehhcrOlGP+oKdS+2kIaoTLVfv9KV9qWLtJU8f2HQUpP/FwmCgaLI1tjRO3keo3jFDl3H1eWm63AJaRzDUSqD4KIIA7ovDBHGsscesdrjY7LB5gbMIoFZkPOPN+IVQPxbfI1FLo/UI6MO7dlNAiCRZt41SviznoGzbIeaexs5CZoHIKGhmzcwh6MYB9fLKp0eA0u0cd2DVh/HdGdLKCgEkpe6rSWDnC2tu22yyKL/NoF1NFPetWt12wbmTX8aKbkgRTgAe/Wx7y1Citpj7Z1/SCpfH+YfysX75PyOWRJAiuCbZoaP9ycIWGq8Z+8BZ36eXxfEeZu44g/62LSh/DexCqmRUZN6oP27p4Fgp5kFUjlaZmL8zY23W+Q0Q2pFrSiYe548lizBmshKTgNDjAaOT/OKIYD3ltVvEpxZXVqa/ja/+FiPENJ9spy8BlIeRKiVqZo5bg+T4lTiQDnEzpI8OAXqYFK0b3lpLeacAJEbT8hemI+v0O7x0NDFEiXI/x9NcYKgL2LSP0sReGMMrnNIQmsRWES1lplqyeO7cM1Jmd0euMr+2mGZnWdmCAWfxbhmHcj85gXJh76NJ8ZOAG4TBwixjr9x69NgPJaB8KXHR4/x2ZIUlHlpS43NakWb619nmMI9g34+wSzK15Ou2Bjpp1HkY+Zhy4ntN9letvrDDAPUDeMTKqFfQ7yNMQ6AAiCCZSHaGYH+X+a+GAm2uxeRbO+O6HpeZLxIisl6OR3x+7sUbNDYfzt7AtkmXE6kXhaYga71uIN35EWAEcZqB5nu7J8E1kgCTttWLiXM3sjb+X2bkCuGYy/5AwGr+OPkYyHLIsAW7v0zs4VL6fl7fyUSjo6dqOkpv/FRVcl9wBtHsbh5afNgbXk8BQYnpC1JuWxJAs7EYclcU3hb+/1VEu3DfOKiJnnZhWj3WYEydx+mMo+DnJA8nbYukN7V0GjkBsaM/LkLDDo1IS2XB29vOKMz47nu6llV2gptAHVy0se3BmtSfmSCwWPDXCYMW3B0suMLSUWhAUAskVuRv9Wek/Y02gw7MxyIWMAMiJB3x3H48v288fim+zTIXB0CnA+FNkAdyxmZJxUz9DQoojpf1OUWHN+AzgQ+BPI5KPK1up9tzZO2j/V23j1i0RxElHADEFBwEu88EjDV9VmOc4WW9iL6Av8myGuws6VxYBmf/gXd4n3D1/sg3herE+DaTgq+iK1eC/2Ww0yRGrKLxdyUXKlu7VglNsNEXQZw/HB96NuWEtKgYJtTuKEctlnvCGqHA8Ubgir052fsqfBSMC36zzT478x3gz++Minsl8BdslkFPeADuP4dmtC8tjqi6C6o2fJrC9HPleaAVkUY/6fKhm4Qhuo0uRb8lCsHmrFR4gITaNYsQO4nOQV0daqo0FwnD5sjximh/0K4xgwoHCEpZKkl9BKJxDEyMcpS7doNahNbixJYPyQ/63GZPUxNo7zyMtAQ8EBJ/y/gZ8tRRuDF01hdK3VCTcUDvJt1v7icN/2QvZ702d08RWYTqIHJLywqEpKJloq2p+jjFCyLn3zWDLEqLsR6/Gy+QEm0ZDcRjOZ4jUl/ZGqR0MKhrMoHYm4yS+aWQxkdq+iKes1JwxPjM2AvsjAGWjb2ZMpL8NQIhq1Yk55lEcdZ2zWzP2pJWRTSkQFhKjnXmzjHadTw4lr/mEZ03Pmk/iCHqvjcDGL8ON0MxxLJrDRM8siOcdsvIqTD1O68TzykpnFJ16KKa4Kfp33AP/iaNFeGcOolPSduQUUNfjJa9+Ugqin2PkiMCN5WgEoQwzw7UPThd9S5mjBMIiK4WmVg44rkXMlPU0il6UpA4BKvSmB6Fg7H0P7nyjG5/0btav/8QhNgZswEU6CB4rwnuPTe9IO6nOxvOgNhkc6QkQ9wDFMfyrVgn2iVYI9mY+DPjWKIObdlqArc6dDLpjKzvrXm2kqJxIhkEUpqRSf32l98n+SawV1K6FLBaejmiakYhUUz29R7pM7yFE18KzGrIjRVXIPu77we9fv2U0gDTZIDxsQh93Wgwa6Gbm2c3HLA+yB+aSlP6c+JRcXIC+Hicn/Dy2Nh8Ex9H0+gak+jgG+hrI2CzLbBmyMgzad4NpbGyFN/8RQgm6hL24kjSiuASc/NWA6lvMZQn4FHk9mUF5kVk6gga81JRGYgIdLR8BVnof+GYuYinDVbcopHXwWpbsyiqmiwvANrL1AAcRXFK5AEp5aqd898MgqdUWOcgn+Oadudm5Ll+sc/vQHC35HN86Ex/xKm/PBoZe/hUSIN6T//D9/7B3QOdD7BTF0+8umTCtolsYyr0CMn/1cLTGqVW0mWAqyn+9pHys/eATvomz4JZFdD988v17B5u2rLvPuIJNUdnYGy+izbDhO6eOP8Vm75uLv3C/EdBKCcWSC1s/AWkXvdffB3nLQf/WPAMwxLwQL6Dt4efpzmKRaek3aJqz0J/2w/4L1Ngibgdb/WL2H4yyoKq30L17vbUfGvWtf83HBWWkJubaK+2AOOTG1toK6j+WEPJ0ug0RNR9QF7za5UKgUSFLgChA6P6IBiVAe71KhHMRUqlfhzk/gtmflMsF36n6d+Oti8ZArFlXBvK7/TKUhoAAL0X7XJfr8A/7AQN+NIvgvDNYeFUK5Gplk3nMHpw2DxCQHWdp9QRS/TovaZyLdVitTiB5GtO9RcHUBFLbDM0Ok3dE5IHv4ooFtuOT8Bjx3LWlsn8GRgzVt3c2FgkMsquZEaVCrMP6bWVKXlQyBkE8SXPqr67txeoRHyO93Kps2W8WqrXGc30TSW1wbsRbcWwCfw56azk3YSbN7tVfwjvGgveL57069ocIN3naGO5MNvFnFw0ihv+aFKpCs9MEkuFsHFf8Xrg1inqTET/OW5WXK29kxzjnfmWzoiZbuOj0ex8f4oGfVr/amAWhruZO8x8JIyhZaczm54OCXJkTlIXMgEgkDIvX8sCX6tXFpf7n0975WSdxPreLZB13r1nqj2dRrqhGcKEnb8A/G6Ui8CyznQ5/5Kj2TLBZwKIKyFeaJm3ZgVFFgAnCvDFeEo7dc7s3IJP02QWFQeUZkSTDFfvkpnu4WHpyKKcg61qTcUJJ0AnukA6N80wpAFCXBD4o55lzfuYlACFWmAX2xS/Ygff5lUIrbSPF8Nat5bfSq5bdbu4bJv9K4Xa7dcsgvwBHqWjBwNw3P0THkzycCcoUHHtEcH7oGNikaYHJC0gW857wKoAIuWIeFtfQ3vdF6Fzp83+TruZv5Xs69HTsGRWAS43/W4uZ/NA5Zv6uB4CPHx4bb8aXAK7l696+vD6He26u/kiMvwsrNwIHAXB1pj/k8XKVFB1xzIfWFZWvaFuC0BzCVirhtBKWK3zaOoMd4XaBwaYrwpGQNyAdtWn+FeWp4GcQkXCmFWE3uKhtyTRsH3PjbXLy1b8QefyPyHt4q7HbzJMTGW/FrK8jKtWNg05sq595dJMRNY0kEGLOBBVGy/80me7l3GRGQX+tfr05DIt4LsHP7uF5ZcgQlFMAX8YMdt7USUzHtBmqh873waM2Q3EBI+i9O5E+7xEddxfdVh3Uvp8jzU8JXHM/yrErwxSrN0JZaxz5zCaf5SFm15Vyauro1KRzgQa2PnacgCWLxyuTE/ABwEplqLg51JdbtRomYeknERY+Q6bvtsA8EhWTZqNsNdmY6XIhPR0eRc75BNxwAFwQGrMlyFn55GJQ3diG2UTbcAaVJdnkvUdn02lE+Zw3xLZ2ssglZEe9h+vCg/izHkzjHEMHon5jlgzwUSLRzBC+QNsUZpVC1OznWGAbKInFg0EODThIN9wgZRvQwC4ZtzVK/zyFGN3jl/0OLUDPuPeSR1E/OT+SYGyjPMvV17MZRR+7pDWdu92lG+JJ1rLRDh+DsS8+B5PSvajjkPAr/pWOGi6WlaQLFPdHyPy4ibrq2sGyuIfPV9H0EYM2NOsKZzwhr1jwCAiGPjmEIpd4d3qmWvQZt7hAqRvdy1eEdNyjyEX+L/sQvH6DLmViViHtUJwblerJK7zDiHnx0eKw9PEUJyOwDwvSZzkuyGVwjCuWth1reop+RCD+GJbz+4vR0pr9Xc7EgaOceGIO9rmvOV2Z82OfxHtgDVOBXm5Zrk93gFNI/HFEP8koWh8Aw/7O0bLaVlvluN+sOX5Fy8rftG12pMlh01Ri31mGMdGTXxkzLRJ+yTMDYitsOHMucRH2B9VZu83OC74//hImNJmnZhIAyZ8eP1Mq6tLaff5ksr9/+tnsEXUkOO9cN6253Wbc/fFO7XiK0eQj91GyUQ8an7NBaKVHd9NeRbOMtl+hrKpR/W5X04AaEGu+oLAg49gvvaub3R3c8O/3757F+S/wzJPp6e0+zAMi96m6LS8Vas+ewoLxtVOxwwK6zR42zN7qnuZNdMI9j4naS6zF7j5YuwAf86Ke25o9izvsZl8rPAJQ1g8d5R9FEwqUDEOhFa7DSDm9GLkOoYjXcHyGmRiNTR6N/YCTibnDNVys75Zpz92n5/pPpFYCvJlNijZK24iszAB/lIfwQPxmjWhD9HmbZ0YiPT9JyKDOjusENIyoAVNWneVtEJh9h956NpHL8tyePXxT1Ap3CJF/MlB1pGsB46yzc3aSXi8p/EoIR5DlDSoy0mRT8dICdORZAVcI8ZoBXsGHoehKNIITDdGAvojeHv4tOOsjj+zMjfjtoz6alQeRJKlFXpZ23nCxwv+PtQ9mvsK/76BfUqcPrffmmmcKCf0b29GqXrcG2ng6odBbLIdJJCLBRciaXnqHGIhOABBEMERxih+LKzBg2GIvXoILlDvUjlAO869OFu+itwHf+IgbMTLNvEw1+nkIvKCVjJo3WQqAkC4/p8xcLqFFm1ZkOXR70CJpDZf0/9tRwlhWhrqQK3rH+L5oEYcOO8zjN4v88I5ykM4QCvphZpjQyN+J/JQEiVqXzLe62YfL+JxGK/YfhlGqnTf03g9FGmjw68BOh9IGa/+cTY2HuKJY04KTajuQ9aPXItH4RbX8l54B6j+A2akbHVrXzQMPEVhoJ+OcPZXairme1q5CI3wx2hZxUIsBLiPJ3kp07QfYtyHJgcvDbeWq4sRc2jy/m7OhuP3Wvp5lAIEv3W/3CalXL/JhdaOYTZV8LN1Kx3nl/ifGRjQh13gvDEdsLY8UBen7aXbZHzoQDNgvXzm8kA3OoPjcc5keLOANIJppN5l05J0phhwR64ZppRWzfwMtryriAQf4fDrdgtzWoe9/3FKKVfRypRv4XNUMaHzQw4vh7saPAcicWf9EybfOhb0Q9gjDjQFqWChh+E1Q5T1Oc8NYiX2wVtI5KPQnLg5ZaT2ZhBgYDJy51+MniVLwa2HmJBNpd2qYKlaxgUGTdCK65JJCS85k/C65cRM/uk5RD/n+uSHn1p1qbD3uMgjBYutSiVwLfjnoPHjHvp8DBjFb6oITNYkUHjiZIlO327EO89EmKLD8hyy49TW1rPLfADf6MfA/3KAuTpsIn3iXCop5Zi6KPyMyEvhaf0E66YDhGcDUOXNeqMzbdJxDX5eJWWYEvxiutvLyw4BPXJUmMjAeGqcVhHA8Tx3GGnQ8t1ITlti8M4VIWp1Eq6TJK2tde0d625xrSCk9UJfTC7E+OSDy2EhqXMlYO2hxkdbDfpQl9HvBjKV4HACsZOQXDW+Qoaj7nT/Y0gM3go7g1s57Vp7eEXEO6dq/8YvFQxoOfeUf4QHNceyhPePJwSFFsYsKCNgJT3l/NatlkarebdIBjp4ir9onv+Uw9NUtN+SLxFG8Wr81a/N/XiadkNWN6JoU4MBpnISOA12nWxnbZN495x8d3JEPauRGmNLkSsoNAjwyVtQAA=';
document.querySelectorAll('img[data-a]').forEach(i => { i.src = i.dataset.a === 'logo' ? LOGO : KAS; });
{ const l = document.createElement('link'); l.rel = 'icon'; l.href = LOGO; document.head.appendChild(l); }
/* mobile view: on by default on phones, switchable anywhere, remembered per browser */
const root = document.documentElement, msw = $('#msw');
function setMobile(on, save){ root.classList.toggle('m', on); msw.setAttribute('aria-checked', String(on));
  $('#hint').textContent = (on || matchMedia('(pointer: coarse)').matches ? 'Tap' : 'Click') + ' any floor to look inside';
  if (save){ try { localStorage.setItem('rt-mobile', on ? '1' : '0'); } catch (e) {} }
  window.dispatchEvent(new Event('resize')); }
msw.onclick = () => setMobile(!root.classList.contains('m'), true);

/* ---------- content ---------- */
/* flow rows: [agent, role, what it does, takes in, hands off, simulated-run line] */
const FLOORS = [
 {name:'Field Ops', tag:'Steel, shipyard and site work', color:'#f2a33a', prop:'steel',
  focus:'Where it started: NYC high-rise steel, then nuclear welding and operations on the U.S. Navy\'s Virginia and Columbia class submarine programs. This floor runs that field discipline as an agent workflow.',
  flow:[
   ['Rigger','Lift planning','Reads the pick list and the crane load chart, checks each lift\'s weight and radius against rated capacity, and writes the rigging plan.','Pick list, load chart','Lift plan','checked every pick against the load chart and wrote the rigging plan'],
   ['Inspector','QA and weld logs','Matches every weld and bolted connection to its drawing detail, logs who did the work and when, and flags anything missing a sign-off.','Lift plan, weld map','Signed inspection log','matched each connection to its detail and flagged one missing sign-off'],
   ['Safety','Site safety','Turns the day\'s plan into a toolbox talk and a hazard checklist, and holds the start until the fall-protection walk is logged.','Day plan, inspection log','Cleared-to-start brief','issued the toolbox talk and cleared the crew to start']],
  out:'A day of steel that is planned, inspected and cleared before the first pick.',
  why:'In steel and in the shipyard, the paperwork is the proof. Every system I build keeps that habit: nothing ships without a check and a sign-off.',
  label:'Credentials', chips:['Virginia and Columbia class submarines','200+ Navy qualifications','VT · PT · MT · RT inspection','OSHA 30','NYC DOB Site Safety','32-Hr Rigging Supervisor','Foreman · Journeyman']},
 {name:'Underwriting', tag:'Multifamily real estate', color:'#39b98a', prop:'charts',
  focus:'LJM Homes multifamily syndication and acquisitions, with more than $150M underwritten. Every deal runs through the same three steps.',
  flow:[
   ['Rentroll','Rent roll cleanup','Standardizes the rent roll into one layout: unit mix, in-place versus market rent, vacancy and lease expirations.','Raw rent roll','Clean unit schedule','standardized the unit mix and flagged the leases expiring this year'],
   ['Analyst','Deal Analyzer','Normalizes the T-12, strips one-time items, and runs the model for NOI, cap rate, cash-on-cash and the sensitivity cases.','Unit schedule, T-12','Underwritten returns','normalized the T-12 and ran the return and sensitivity cases'],
   ['Lender','Debt sizing','Sizes the loan against LTV and coverage limits at current rates, and shows how the returns move if the rate does.','NOI, loan terms','Debt quote and coverage','sized the loan to the coverage limit at today\'s rate']],
  out:'A go, review or pass memo with the numbers behind it.',
  why:'Deals move fast and seller numbers run optimistic. One consistent model makes deals comparable and catches the weak ones early.',
  work:[1]},
 {name:'Commerce', tag:'E-commerce', color:'#4f93ee', prop:'shelves',
  focus:'Forge by Aurevon Labs: a headless Shopify storefront on forge.aurevonvc.com. Shopify runs the back office and the agents keep the front end in step.',
  flow:[
   ['Forge','Catalog','Treats Shopify as the single source for products, prices and inventory, and pushes every change to the storefront so pages never show stale stock.','Shopify catalog','Synced product data','synced the catalog and updated two prices on the storefront'],
   ['Pixel','Product images','Compresses and resizes each product image and writes its alt text, so pages load fast and stay accessible.','Raw product images','Optimized image set','compressed the new image set and wrote the alt text'],
   ['Courier','Orders','Follows each order from checkout to confirmation and flags anything stuck, so a customer hears back before they have to ask.','New orders','Confirmations, exception flags','sent the confirmations and flagged one order waiting on stock']],
  out:'A storefront that matches the back office and loads fast.',
  why:'In e-commerce, speed and accuracy are what convert. The platform keeps checkout and inventory safe, and the agents keep the custom front end honest.',
  work:[2]},
 {name:'Studio', tag:'Content and community', color:'#e0457b', prop:'studio',
  focus:'Content, community and creator tools. Four agents work side by side here, each on its own lane.',
  flow:[
   ['Herald','Posting agent','Drafts posts from what shipped that week, keeps the voice consistent, and queues them on a fixed weekly rhythm for @AurevonLabs.','Shipping notes','Scheduled posts','drafted this week\'s thread and queued it for 9:00'],
   ['Reel','Short video','Cuts the week\'s work into short captioned clips for the recap.','Screen recordings','Captioned clips','cut and captioned the clip for the weekly recap'],
   ['Scout','Sponsor pipeline','Finds brands that fit a creator\'s niche, tracks every pitch in one pipeline, and drafts the follow-ups that usually get forgotten.','Creator niche, audience','Sponsor list, drafted follow-ups','found four sponsors that fit and drafted two follow-ups'],
   ['Keyholder','Discord roles','Verifies a member\'s pass and grants the matching Discord role automatically, with nobody checking wallets by hand.','Wallet, pass level','Role granted','verified a pass and granted the matching Discord role']],
  out:'A steady public presence, a gated community, and a sponsor pipeline that keeps moving.',
  why:'Content and community reward consistency, and consistency is the first thing to slip when you are busy building.',
  work:[4,6,5]},
 {name:'Labs', tag:'AI systems', color:'#8a6cf0', prop:'servers',
  focus:'AI systems and product engineering: the agents, apps and client workflows Aurevon Labs builds, with Interlude coming soon.',
  flow:[
   ['Improver','Bot audits','Scores every bot each week on reliability, security and usage, then ranks the fixes by impact. Nothing changes until a person approves it.','Bot logs and prompts','Ranked fix list','scored the bots and ranked this week\'s fixes for approval'],
   ['Muse','Cohive planner','Gathers the options for a group plan, does the cost split, and puts the choice to a vote instead of deciding for the group.','Dates, budgets, preferences','Options ready to vote on','gathered three stays that fit and split the cost per person'],
   ['Relay','Client workflows','Builds one workflow at a time for a small business, tests it against real cases, and hands it over with documentation.','A repetitive job','A documented, running workflow','tested the client workflow on real cases and wrote the handoff notes'],
   ['Meter','Interlude · coming soon','Counts the seconds a sponsored message is verified visible during an AI wait, bills the advertiser, and credits the person waiting with their share.','Timing and visibility signals','Billed seconds, earner share','counted the verified seconds and credited the earner share']],
  out:'Agents that are reviewed, documented and safe to leave running.',
  why:'An agent nobody audits will drift. The review loop around the agent is as much the product as the agent.',
  work:[0,3,7]},
 {name:'HQ', tag:'Aurevon Ventures', color:'#d7262f', prop:'board',
  focus:'Aurevon Ventures: six verticals under Systems · Capital · Infrastructure, run from one floor.',
  flow:[
   ['Grok','Chief of staff','Reads what every floor shipped, sets the day\'s priorities, and routes each request to the floor that owns it.','Floor reports','Daily plan','read the floor reports and set today\'s priorities'],
   ['Ledger','Planning tools','Tracks spend and usage across every agent and flags the ones that cost more than they return.','Usage and spend','Cost report','checked spend across the agents and flagged one to review'],
   ['Atlas','Strategy','Compares the six verticals each week and shows where time and capital should go next.','Vertical results','Weekly review','compared the six verticals and drafted the weekly review']],
  out:'One view of six verticals, so every decision starts from the same numbers.',
  why:'A holding company breaks at the seams between its businesses. HQ exists to keep them pointed the same way.',
  label:'Verticals', chips:['E-commerce','CRE','Consulting','Ad marketplace','Web3','Financial planning']},
];
/* projects: every one uses the same frame (status, pitch, two sets of steps, four facts, demo) */
const WORK = [
 {t:'Bot Improver', f:4, demo:'improver', status:'Agents · free Grok Bot',
  lede:'A weekly performance review for your bots.',
  desc:'People running several Grok bots cannot see which ones are drifting, leaking or wasting usage until something breaks. Bot Improver scores each bot every week, audits security and reliability, and ranks the fixes.',
  i:'A ranked fix list gets acted on. A long audit report gets skimmed.',
  cols:[['Each week',['Scores every bot on reliability, security and usage.','Audits prompts and logs for leaks, missing retries and silent failures.','Ranks the fixes so the worst problem comes first.']],
        ['You stay in control',['Read a short ranked list in place of a long report.','Approve a fix or skip it.','See the score move once the fix is retested.']]],
  facts:[['Weekly','review cadence'],['3','checks: reliability, security, usage'],['Ranked','fixes, worst first'],['0','changes without your approval']]},
 {t:'Deal Analyzer', f:1, demo:'analyzer', status:'Real estate · underwriting tool',
  lede:'One model for every multifamily deal.',
  desc:'Deals arrive as messy rent rolls and T-12s, and every spreadsheet model is a little different. The Deal Analyzer runs each deal through the same underwriting model and ends in a clear verdict.',
  i:'When every deal runs through the same model, comparisons are fair and the no-gos come fast.',
  cols:[['What goes in',['The rent roll: unit mix, rents, vacancy and lease dates.','The T-12, with one-time items stripped out.','Debt terms: leverage, rate and amortization.']],
        ['What comes out',['NOI, cap rate and cash-on-cash return.','Debt service and coverage at current rates.','A go, review or pass verdict with the numbers behind it.']]],
  facts:[['$150M+','multifamily acquisitions I have underwritten'],['3','inputs: rent roll, T-12, debt terms'],['1','model for every deal'],['Go or pass','a clear verdict every time']],
  note:'A working calculator on a sample deal. Move the sliders.'},
 {t:'Forge Storefront', f:2, demo:'storefront', status:'Commerce · live', link:['Visit Forge','https://forge.aurevonvc.com'],
  lede:'A custom storefront, with Shopify behind the counter.',
  desc:'The original ForgeAI theme store was hard to change, and an audit turned up more fixes than the theme could absorb. The rebuild at forge.aurevonvc.com keeps Shopify for the catalog, inventory and checkout, and puts a custom front end on top.',
  i:'Let the platform run the critical plumbing. Own the part customers actually see.',
  cols:[['For shoppers',['Pages load fast from an edge cache.','Prices and stock match the back office.','Checkout hands off to Shopify, where payment is handled.']],
        ['Behind the counter',['Shopify stays the single source for products and inventory.','Catalog changes reach the storefront on their own.','The front end can change without touching checkout.']]],
  facts:[['Headless','custom front end'],['Shopify','catalog, inventory, checkout'],['1','source of truth for stock'],['Live','at forge.aurevonvc.com']]},
 {t:'Cohive', f:4, demo:'cohive', status:'Consumer app',
  lede:'Group plans that actually get made.',
  desc:'Group plans die in group chats. Nobody owns the spreadsheet and the dates never line up. Cohive keeps one shared plan for trips, homes and dinners. Agents gather the options and do the math, and the group votes.',
  i:'Agents should propose. People should decide.',
  cols:[['For the group',['Start one shared plan for a trip, a home or a dinner.','See real options side by side, with the cost per person.','Vote, and the plan locks when the group agrees.']],
        ['What the agents do',['Grok pulls options that fit everyone\'s dates and budget.','Muse splits the cost and drafts the plan.','Neither one decides. They propose and the group chooses.']]],
  facts:[['3','plan types: trips, homes, dinners'],['2','agents: Grok and Muse'],['1','shared plan for everyone'],['Vote','the group decides']]},
 {t:'Labs Posting Agent', f:3, demo:'posting', status:'Automation',
  lede:'Publishing that never waits on me.',
  desc:'Posting consistently competes with building, and building always wins. This agent drafts posts for @AurevonLabs from what shipped that week and queues them on a fixed weekly rhythm.',
  i:'A schedule the agent owns beats a burst of posts whenever there is time.',
  cols:[['Each week',['Reads the notes on what shipped.','Drafts posts in a consistent voice.','Schedules them into set slots across the week.']],
        ['Why it works',['The schedule belongs to the agent, so it never slips.','Drafts come from real work, so there is always something to say.','Posts go out on a rhythm, not in bursts.']]],
  facts:[['Weekly','posting rhythm'],['@AurevonLabs','the account it runs'],['Drafts','written from what shipped'],['Queued','scheduled ahead of time']]},
 {t:'Membership Passes', f:3, demo:'passes', status:'Web3 · community',
  lede:'Access that follows ownership.',
  desc:'Gating a community by hand means checking wallets and assigning roles one member at a time. The Aurevon pass collection has five levels, Genesis through Obsidian, and the Discord roles are granted automatically.',
  i:'Access should follow ownership, with no one stuck in the loop.',
  cols:[['For members',['Hold a pass at any of the five levels.','Connect once and the pass is verified.','The matching Discord role appears on its own.']],
        ['For the community',['No one checks wallets by hand.','Roles always match what a member holds.','The pass is the membership card, and Discord is the clubhouse.']]],
  facts:[['5','pass levels, Genesis through Obsidian'],['Auto','Discord roles granted'],['0','manual wallet checks'],['1','pass is the membership card']]},
 {t:'Sponsorship Pipeline', f:3, demo:'sponsor', status:'Creators · free template', link:['See the post on X','https://x.com/kasike/status/2117163638591005179'],
  lede:'Find sponsors. Never drop a follow-up.',
  desc:'Creators chasing brand deals lose them in the follow-up. Creator Sponsorship Pipeline is a free Grok Bot template that finds sponsors that fit and drafts the follow-ups.',
  i:'Most brand deals are lost to silence. The follow-up is the product.',
  cols:[['For creators',['Describe your niche and your audience.','Get a list of sponsors that fit.','Send follow-ups that are already drafted.']],
        ['What the agent does',['Searches for brands that match the creator.','Tracks each pitch in one pipeline.','Drafts the follow-up when a pitch goes quiet.']]],
  facts:[['Free','Grok Bot template'],['2','jobs: find sponsors, draft follow-ups'],['1','pipeline for every pitch'],['On X','shared from @kasike']]},
 {t:'Interlude', f:4, demo:'interlude', soon:true, status:'Coming soon · private preview', link:['Visit Interlude','https://interlude.aurevonvc.com'],
  lede:'Own the moment AI makes people wait.',
  desc:'Interlude is a marketplace for AI wait time. While an assistant is generating a response, a small labeled sponsored message appears. Advertisers pay only for the seconds it is verified visible, and the person waiting earns a share.',
  i:'Price attention by the verified second, and share it with the person giving it.',
  cols:[['For advertisers',['Create a campaign and fund a balance. Spend can never exceed it.','Set a bid, from $1.00 per verified minute. The highest funded bid shows first and ties rotate.','Pay only for seconds actually seen. Hidden tabs never bill.']],
        ['For earners',['Create a free account. The browser extension is coming soon to the Chrome Web Store.','Use your AI assistant as usual. Only timing and visibility signals are sent, never page content.','Cash out your share from your wallet at any time.']]],
  facts:[['$1.00','starting bid per verified minute'],['25%','of billed wait time goes to the earner'],['$0.50','flat per click, once per session'],['$0','setup fees or minimums']],
  note:'An illustration with a sample sponsor. Rates are the published starting prices.'}
];
const SERVICE = {t:'AI workflows for small business', demo:'service', status:'Service · Aurevon Labs', link:['Start a project','https://labs.aurevonvc.com'],
  lede:'Pick the load you want off your plate.',
  desc:'I design agent workflows for small businesses, build them, and keep them running, to the inspect-and-sign standard I learned on Navy submarine work. Start with one repetitive job, or hand over the whole operation.',
  i:'Start with the one job that costs you time every week.',
  cols:[['How it starts',['We pick one repetitive job that costs you time every week.','I build the workflow and test it against your real cases.','You get it running, with documentation.']],
        ['Three ways to work',['One workflow: a single job, automated and handed back documented.','Integrated system: several agents wired into your tools, sharing context.','Hands-free, managed: I run it, with monitoring, weekly reviews and your approval on every change.']]],
  facts:[['1','workflow to start'],['3','ways to work together'],['Weekly','reviews when I run it for you'],['You','approve every change']],
  note:'A sample run. Pick how much you hand over.'};
const shipped = WORK.filter(w => !w.soon).length;
const LOADS = [
 {v:'$150M',s:'+',p:'Multifamily acquisitions underwritten',r:'EVP and Underwriter · LJM Homes',f:1},
 {v:'200',s:'+',p:'Navy-issued qualifications earned on Virginia and Columbia class submarine work',r:'Operations Supervisor at 23 · Rhoads Industries · U.S. Navy nuclear submarine program',f:0},
 {v:'3%',s:'',p:'Rework on my crew, brought down from 18% with zero lost-time injuries',r:'Team Lead, nuclear welding · Rhoads Industries',f:0},
 {v:'NYC',s:'',p:'High-rise steel raised, crews led and picks rigged',r:'Foreman · OSHA 30 · NYC DOB Site Safety · 32-Hr Rigging Supervisor',f:0},
 {v:'06',s:'',p:'Verticals built and run under one roof',r:'Co-owner and EVP · Aurevon Ventures',f:5},
 {v:String(shipped).padStart(2,'0'),s:'',p:'Projects shipped, from agents to storefronts',r:'Founder · Aurevon Labs',f:4}
];
FLOORS.forEach((F, i) => { F.i = i; F.bots = F.flow.map(s => ({n: s[0], r: s[1], st: 'working'})); });
const agents = FLOORS.reduce((n, F) => n + F.bots.length, 0);

/* ---------- lists ---------- */
const list = $('#floorList'), detail = $('#detail'), tabs = $('#tabs'), show = $('#show');
let sel = null;
list.innerHTML = [...FLOORS].reverse().map(F => `<li style="--o:${F.i + 1}"><button class="fl-btn" type="button" data-f="${F.i}" aria-pressed="false" style="--c:${F.color}"><span class="badge">${num(F.i)}</span><b>${F.name}</b><small>${F.tag}</small></button></li>`).join('') +
  `<li style="--o:0"><button class="fl-btn" type="button" data-f="-1" aria-pressed="true" style="--c:var(--chrome)"><span class="badge" aria-hidden="true">⌂</span><b>Whole tower</b><small>All floors</small></button></li>`;
$('#loadsGrid').innerHTML = LOADS.map(L => `<button class="load" type="button" data-f="${L.f}" style="--c:${FLOORS[L.f].color}"><b>${L.v}<small>${L.s}</small></b><p>${L.p}</p><span class="role">${L.r}</span><span class="go">See floor ${num(L.f)} · ${FLOORS[L.f].name}</span></button>`).join('');
tabs.innerHTML = WORK.map((W, k) => `<button class="tab" type="button" data-w="${k}" aria-pressed="false" style="--c:${FLOORS[W.f].color}"><i></i>${W.t}${W.soon ? '<small>Coming soon</small>' : ''}</button>`).join('');
$('#btnNext').onclick = () => select(sel === null ? 0 : (sel + 1) % FLOORS.length);
setMobile(root.classList.contains('m'), false);

const go = id => $(id).scrollIntoView({behavior: R ? 'auto' : 'smooth'});
document.addEventListener('click', e => {
  const w = e.target.closest('[data-w]');
  if (w) { showWork(+w.dataset.w, true); if (!w.closest('.tabs')) go('#work'); return; }
  const f = e.target.closest('[data-f]');
  if (!f) return;
  const v = +f.dataset.f; select(v < 0 ? null : v);
  if (!f.closest('.hero')) go('#tower');
});

/* ---------- floor panel ---------- */
const simHTML = label => `<details class="sim"><summary>${label}</summary><ol class="sim-log" id="simLog"></ol><p class="sim-note">Simulated to show the order of work. Not live data.</p></details>`;
function renderDetail(){
  stopRun();
  if (sel === null){
    detail.style.setProperty('--c', 'var(--chrome)');
    detail.innerHTML = `<div class="d-top"><span class="d-kick">Rivera Tower</span><div class="d-title"><h2>How to read the tower</h2></div><p>Each floor shows how a small team of agents runs that line of work. Pick a floor and the ones above it lift away, so you can see how the work moves from one agent to the next.</p></div>
    <div class="d-facts"><div><b>6</b><span>floors</span></div><div><b>${agents}</b><span>agents</span></div><div><b>${shipped}</b><span>projects shipped</span></div><div><b>1</b><span>project coming soon</span></div></div>
    <div class="d-sec"><span class="mono">Good places to start</span><div class="chips"><button type="button" data-f="4">05 Labs</button><button type="button" data-f="1">02 Underwriting</button><button type="button" data-f="3">04 Studio</button></div></div>
    ${simHTML('Watch a simulated day across the tower')}`;
  } else {
    const F = FLOORS[sel];
    detail.style.setProperty('--c', F.color);
    detail.innerHTML = `<div class="d-top"><div class="d-title"><span class="badge">${num(sel)}</span><div><h2>${F.name}</h2><span class="d-kick">${F.tag}</span></div></div><p>${F.focus}</p></div>
    <div class="d-sec"><span class="mono">${F.soon ? 'How it will work' : 'How the work moves'}</span><ol class="flow">${F.flow.map(s => `<li><h3>${s[0]}<small>${s[1]}</small></h3><p>${s[2]}</p><div class="io"><span>In · <i>${s[3]}</i></span><span>Out · <i>${s[4]}</i></span></div></li>`).join('')}</ol></div>
    <div class="d-sec out"><span class="mono">What comes out</span><p>${F.out}</p><p class="why">${F.why}</p></div>
    ${F.work ? `<div class="d-sec"><span class="mono">Work on this floor</span><div class="chips">${F.work.map(k => `<button type="button" data-w="${k}">${WORK[k].t}${WORK[k].soon ? ' · coming soon' : ''} →</button>`).join('')}</div></div>` : ''}
    ${F.chips ? `<div class="d-sec"><span class="mono">${F.label}</span><div class="chips">${F.chips.map(c => `<span>${c}</span>`).join('')}</div></div>` : ''}
    ${simHTML('Watch a simulated run')}`;
  }
  detail.scrollTop = 0;
  const d = detail.querySelector('details.sim');
  d.addEventListener('toggle', () => { if (d.isConnected) d.open ? startRun() : stopRun(); });
}

/* ---------- optional simulated run ---------- */
let runT = null;
const sync = () => { if (window.__tower) window.__tower.sync(); };
function stopRun(){
  if (runT) { clearInterval(runT); runT = null; }
  FLOORS.forEach(F => F.bots.forEach(b => b.st = 'working'));
  detail.querySelectorAll('.flow li').forEach(el => el.classList.remove('on', 'done'));
  sync();
}
function startRun(){
  stopRun();
  const log = $('#simLog'); if (!log) return;
  const F = sel === null ? null : FLOORS[sel], steps = [...detail.querySelectorAll('.flow li')];
  const lines = F ? F.flow.map(s => [s[0], s[5]]).concat([['Output', F.out.charAt(0).toLowerCase() + F.out.slice(1)]])
                  : FLOORS.filter(x => !x.soon).map(x => { const s = x.flow[x.flow.length - 1]; return [x.name, s[0] + ' ' + s[5]]; });
  let k = 0;
  const tick = () => {
    if (k > lines.length + 1) { k = 0; log.innerHTML = ''; }
    if (k < lines.length){
      const s = k*4, li = document.createElement('li');
      li.innerHTML = `<time>${Math.floor(s/60)}:${String(s%60).padStart(2, '0')}</time><span><b>${lines[k][0]}</b> ${lines[k][1]}</span>`;
      log.appendChild(li); log.scrollTop = log.scrollHeight;
    }
    if (F){
      steps.forEach((el, j) => { el.classList.toggle('done', j < k); el.classList.toggle('on', j === k); });
      F.bots.forEach((b, j) => b.st = j < k ? 'resting' : j === k ? 'working' : 'waiting');
      sync();
    }
    k++;
  };
  tick(); runT = setInterval(tick, 1700);
}

/* ---------- selection ---------- */
function select(f){
  sel = f;
  list.querySelectorAll('[data-f]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.f === (sel === null ? -1 : sel))));
  if (sel !== null) $('#hint').hidden = true;
  renderDetail();
}
renderDetail();

/* ---------- nav highlight ---------- */
if ('IntersectionObserver' in window){
  const links = [...document.querySelectorAll('.bar nav a, .mbar a')];
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.setAttribute('aria-current', String(a.pathname === '/' && a.hash === '#' + e.target.id))); }), {rootMargin: '-40% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
}



/* ---------- articles page: real addresses (/articles, /articles/<slug>) handled in place, so the 3D scene is not reloaded ---------- */
const reader = $('#reader'), rdBar = $('#rdBar'), ARTS = ['the-long-ride-home', 'the-three-percent-standard'];
const TITLES = {'': 'Mike Rivera · @kasike', articles: 'Field notes · Mike Rivera', 'the-long-ride-home': 'The Long Ride Home · Mike Rivera', 'the-three-percent-standard': 'The 3% Standard · Mike Rivera'};
let reading = false;
function route(e){
  const old = location.hash.slice(1);
  if (location.pathname === '/' && (old === 'articles' || ARTS.includes(old))){ history.replaceState(null, '', old === 'articles' ? '/articles' : '/articles/' + old); }   /* links shared before the move still work */
  const p = location.pathname.replace(/\/+$/, ''), slug = p.startsWith('/articles/') ? p.slice(10) : '', art = ARTS.includes(slug), on = art || p === '/articles', h = location.hash.slice(1);
  document.title = TITLES[art ? slug : on ? 'articles' : ''];
  if (on){
    reading = true; root.classList.add('rd'); reader.hidden = false; $('main').hidden = true;
    $('#rdIndex').hidden = art; ARTS.forEach(a => { $('#art-' + a).hidden = a !== slug; });
    scrollTo({top: 0, behavior: 'instant'}); rdBar.style.transform = 'scaleX(0)';
    const hd = (art ? $('#art-' + slug) : $('#rdIndex')).querySelector('h1'); if (hd && e) hd.focus({preventScroll: true});
    document.querySelectorAll('.bar nav a, .mbar a').forEach(a => a.setAttribute('aria-current', String(a.pathname === '/articles')));
  } else {
    const was = reading;
    if (was){ reading = false; root.classList.remove('rd'); reader.hidden = true; $('main').hidden = false; dispatchEvent(new Event('resize')); }
    const t = h && document.getElementById(h);
    if (t && (was || e === 'click')) t.scrollIntoView({behavior: was || R ? 'instant' : 'smooth'}); else if (was || (e === 'click' && !h)) scrollTo({top: 0, behavior: was || R ? 'instant' : 'smooth'});
  }
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.origin !== location.origin || a.hasAttribute('data-src') || a.id === 'skip') return;
  const p = a.pathname.replace(/\/+$/, '');
  if (p !== '' && p !== '/articles' && !(p.startsWith('/articles/') && ARTS.includes(p.slice(10)))) return;
  e.preventDefault();
  if (a.pathname + a.hash !== location.pathname + location.hash) history.pushState(null, '', a.pathname + a.hash);
  route('click');
});
addEventListener('popstate', () => route('pop')); route();
/* a link straight to a section: line it up again once everything above it has rendered */
if (!reading && location.hash){ const again = () => { const t = document.getElementById(location.hash.slice(1)); if (t && !reading && scrollY < 4 + (t.getBoundingClientRect().top > 200 ? 1e9 : 0)) t.scrollIntoView({behavior: 'instant'}); }; requestAnimationFrame(again); addEventListener('load', () => setTimeout(again, 60), {once: true}); }
$('#skip').addEventListener('click', e => { e.preventDefault(); const t = reading ? [...reader.querySelectorAll('h1')].find(h => h.offsetParent) : $('#home h1'); if (t){ t.setAttribute('tabindex', '-1'); t.focus({preventScroll: true}); t.scrollIntoView({block: 'start', behavior: 'instant'}); } });
/* email copy buttons: mail links can be blocked inside a viewer, so each address can be copied; if the clipboard is refused, the address is selected instead */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-copy]'); if (!b) return;
  const say = t => { b.textContent = t; clearTimeout(b._t); b._t = setTimeout(() => { b.textContent = 'Copy'; }, 1600); };
  const pick = () => { try { const r = document.createRange(); r.selectNodeContents(b.parentElement.querySelector('.em')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); say('Selected'); } catch (err) {} };
  try { navigator.clipboard.writeText(b.dataset.copy).then(() => say('Copied'), pick); } catch (err) { pick(); }
});
addEventListener('scroll', () => { if (reading && !$('#rdIndex').offsetParent) rdBar.style.transform = `scaleX(${Math.min(1, scrollY/Math.max(1, document.documentElement.scrollHeight - innerHeight))})`; }, {passive: true});
document.addEventListener('click', e => { const a = e.target.closest('a[data-src]'); if (a){ e.preventDefault(); a.closest('.art').querySelector('.art-src').scrollIntoView({behavior: R ? 'auto' : 'smooth'}); } });

/* ---------- showcase frame, shared by every project and the service ---------- */
const ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const frame = (X, c, foot) => `<div class="il" style="--c:${c}"><div class="il-main"><span class="pill"><i></i>${X.status}</span><h3 class="il-t">${X.t}</h3><p class="lede">${X.lede}</p><p class="il-d">${X.desc}</p><p class="ins"><mark>${X.i}</mark></p>
  <div class="il-cols">${X.cols.map(col => `<div><h4>${col[0]}</h4><ol>${col[1].map(s => `<li>${s}</li>`).join('')}</ol></div>`).join('')}</div>
  <div class="facts">${X.facts.map(f => `<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join('')}</div>
  <div class="actions">${X.link ? `<a class="btn" href="${X.link[1]}" target="_blank" rel="noopener">${X.link[0]}${ARROW}</a>` : ''}${foot}</div></div>
  <div class="il-side"><div class="demo" role="group" aria-label="${X.t} demo"></div><small>${X.note || 'A working illustration with sample data.'}</small></div></div>`;
/* a demo runs only while it is on screen */
function live(host, name){
  const T = []; let on = false;
  const set = v => { if (v === on) return; on = v; if (v){ try { DEMOS[name](host, T); } catch (err) {} } else { T.forEach(clearInterval); T.length = 0; } };
  if (!('IntersectionObserver' in window)) { set(true); return () => set(false); }
  let seen = false; const sync = () => set(seen && !document.hidden);
  const io = new IntersectionObserver(es => { seen = es[es.length - 1].isIntersecting; sync(); }); io.observe(host);
  document.addEventListener('visibilitychange', sync);
  return () => { io.disconnect(); document.removeEventListener('visibilitychange', sync); set(false); };
}
let stopShow = null;
function showWork(k, anim){
  const W = WORK[k], F = FLOORS[W.f];
  if (stopShow) stopShow();
  tabs.querySelectorAll('.tab').forEach((b, j) => b.setAttribute('aria-pressed', String(j === k)));
  show.innerHTML = frame(W, F.color, `<button class="link" type="button" data-f="${W.f}">See floor ${num(W.f)} · ${F.name}</button>`);
  if (anim) show.firstElementChild.classList.add('in');
  stopShow = live(show.querySelector('.demo'), W.demo);
}
function initShow(){
  showWork(0, false);
  $('#svc').innerHTML = frame(SERVICE, 'var(--chrome)', '<a class="link" href="/#contact">Get in touch</a>');
  live($('#svc .demo'), 'service');
}

const DEMOS = {
 improver(el, T){
  const bots = [{n:'Echo',s:58,f:'No retry on API timeouts'},{n:'Nova',s:66,f:'Key pattern found in a prompt'},{n:'Atlas',s:81,f:'Slow tool calls at peak'},{n:'Relay',s:49,f:'Errors never alert anyone'}];
  el.innerHTML = '<div class="d-head"><span>Fix queue · worst first</span><span class="d-live">Weekly review</span></div><div class="iq"></div>';
  const q = el.querySelector('.iq');
  bots.forEach(b => { const r = document.createElement('div'); r.className = 'iq-row'; r.innerHTML = `<b>${b.n}</b><div class="iq-bar"><i></i></div><span class="iq-s"></span><small></small><button type="button">Approve fix</button>`; q.appendChild(r); b.el = r;
    r.querySelector('button').onclick = () => { if (b.done) return; b.done = 1; b.s = Math.min(97, b.s + 24); b.f = 'Fixed and retested'; draw(); }; });
  function draw(){ [...bots].sort((a,b) => a.s - b.s).forEach((b,i) => { b.el.style.transform = `translateY(${i*46}px)`; const bar = b.el.querySelector('i'); bar.style.width = b.s + '%'; bar.style.background = b.s < 60 ? 'var(--red)' : b.s < 80 ? 'var(--wait)' : 'var(--ok)'; b.el.querySelector('.iq-s').textContent = b.s; b.el.querySelector('small').textContent = b.f; const bt = b.el.querySelector('button'); bt.disabled = !!b.done; bt.textContent = b.done ? 'Approved ✓' : 'Approve fix'; }); }
  draw();
  T.push(setInterval(() => { bots.forEach(b => { if (!b.done) b.s = Math.max(35, Math.min(88, b.s + Math.round((Math.random()-.5)*8))); }); draw(); }, 1500));
 },
 analyzer(el){
  el.innerHTML = `<div class="d-head"><span>Sample deal · 70% LTV · 30-yr amortization</span><span class="d-verdict" id="da-v">Review</span></div>
  <div class="da"><div class="da-in">
   <label for="da-price">Price <output id="da-po"></output></label><input id="da-price" type="range" min="2000000" max="12000000" step="100000" value="6500000">
   <label for="da-noi">NOI <output id="da-no"></output></label><input id="da-noi" type="range" min="150000" max="900000" step="5000" value="420000">
   <label for="da-rate">Interest rate <output id="da-ro"></output></label><input id="da-rate" type="range" min="4.5" max="8.5" step="0.05" value="6.25">
  </div><div class="da-out"><div><small>Cap rate</small><b id="da-cap"></b></div><div><small>DSCR</small><b id="da-dscr"></b></div><div><small>Debt service</small><b id="da-ds"></b></div><div><small>Cash on cash</small><b id="da-coc"></b></div></div></div>`;
  const g = id => el.querySelector('#'+id), fm = n => '$' + (n >= 1e6 ? (n/1e6).toFixed(2) + 'M' : Math.round(n/1e3) + 'K');
  function calc(){ const p = +g('da-price').value, n = +g('da-noi').value, r = +g('da-rate').value/1200, L = p*.7, ds = 12*L*r/(1 - Math.pow(1+r, -360)), dscr = n/ds, coc = (n-ds)/(p*.3), cap = n/p;
   g('da-po').textContent = fm(p); g('da-no').textContent = fm(n); g('da-ro').textContent = (r*1200).toFixed(2) + '%';
   g('da-cap').textContent = (cap*100).toFixed(2) + '%'; g('da-dscr').textContent = dscr.toFixed(2) + 'x'; g('da-ds').textContent = fm(ds); g('da-coc').textContent = (coc*100).toFixed(1) + '%';
   const v = g('da-v'), k = dscr >= 1.25 && coc >= .06 ? 'go' : dscr >= 1.15 ? 'review' : 'pass'; v.textContent = {go:'Go',review:'Review',pass:'Pass'}[k]; v.dataset.k = k; }
  el.querySelectorAll('input').forEach(i => i.addEventListener('input', calc)); calc();
 },
 storefront(el){
  el.innerHTML = `<div class="d-head"><span>Headless storefront · sample catalog</span><span class="sf-cart">Cart <b>0</b></span></div>
  <div class="sf-pipe"><span>Shopify<small>catalog · checkout</small></span><i></i><span>Edge cache<small>fast first load</small></span><i></i><span>Forge front end<small>forge.aurevonvc.com</small></span></div>
  <div class="sf-items">${[1,2,3].map(n => `<div class="sf-item"><div class="sf-img" style="--h:${190+n*40}"></div><b>Sample item 0${n}</b><button type="button">Add to cart</button></div>`).join('')}</div>`;
  let c = 0; const cart = el.querySelector('.sf-cart'), cb = cart.querySelector('b');
  el.querySelectorAll('.sf-item button').forEach(b => b.onclick = () => { cb.textContent = ++c; cart.classList.remove('pop'); void cart.offsetWidth; cart.classList.add('pop'); b.textContent = 'Added ✓'; setTimeout(() => b.textContent = 'Add to cart', 900); });
 },
 cohive(el, T){
  const opts = ['Beach house','Mountain cabin','City loft'], lines = ["Grok: pulled three stays that fit everyone's dates.", 'Muse: split the cost per person and drafted day one.'];
  el.innerHTML = `<div class="d-head"><span>Group trip · 6 people</span><span class="d-live" id="ch-s">Voting</span></div><div class="ch">${opts.map(o => `<div class="ch-o"><span>${o}</span><div class="ch-bar"><i></i></div><b>0</b></div>`).join('')}</div><div class="ch-msgs"></div>`;
  const rows = [...el.querySelectorAll('.ch-o')], msgs = el.querySelector('.ch-msgs'), st = el.querySelector('#ch-s');
  let v, n;
  const say = i => { const p = document.createElement('p'); p.textContent = lines[i]; msgs.appendChild(p); };
  const draw = () => rows.forEach((r,i) => { r.querySelector('i').style.width = (v[i]/6*100) + '%'; r.querySelector('b').textContent = v[i]; });
  const reset = () => { v = [0,0,0]; n = 0; rows.forEach(r => r.classList.remove('win')); msgs.innerHTML = ''; st.textContent = 'Voting'; draw(); say(0); };
  reset();
  T.push(setInterval(() => { if (n < 6) { const i = Math.random() < .5 ? 0 : Math.random() < .6 ? 1 : 2; v[i]++; n++; draw(); if (n === 6) { rows[v.indexOf(Math.max(...v))].classList.add('win'); st.textContent = 'Plan locked ✓'; say(1); } } else if (++n > 10) reset(); }, 800));
 },
 posting(el, T){
  const posts = ['Shipped: a weekly performance review for your bots.', 'Your agents should report to you, not the other way around.', 'New in the Labs: one tower to watch every agent you run.'], days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  el.innerHTML = `<div class="d-head"><span>@AurevonLabs · draft queue</span><span class="d-live">Auto-schedule</span></div><div class="pa-draft"><span class="pa-txt"></span><i class="pa-caret"></i><em class="pa-chip" hidden></em></div><div class="pa-week">${days.map(d => `<div><small>${d}</small><span></span></div>`).join('')}</div>`;
  const tx = el.querySelector('.pa-txt'), chip = el.querySelector('.pa-chip'), slots = [...el.querySelectorAll('.pa-week span')];
  let p = 0, c = 0, slot = 0, hold = 0;
  T.push(setInterval(() => { const s = posts[p % posts.length];
   if (c < s.length) { tx.textContent = s.slice(0, ++c); return; }
   if (hold === 0) { chip.textContent = `Scheduled · ${days[slot % 7]} 9:00`; chip.hidden = false; const sl = slots[slot % 7]; sl.classList.add('on'); sl.textContent = '9:00'; }
   if (++hold > 30) { hold = 0; c = 0; p++; slot += 2; chip.hidden = true; tx.textContent = ''; if (slot >= 14) { slot = 0; slots.forEach(x => { x.classList.remove('on'); x.textContent = ''; }); } }
  }, 45));
 },
 passes(el, T){
  const tiers = ['Genesis','Chrome','Insider','Ember','Obsidian'], steps = ['Wallet connected','Pass verified','Discord role synced'];
  el.innerHTML = `<div class="d-head"><span>Membership passes · five levels</span><span class="d-live">Auto access</span></div><div class="mp">${tiers.map((t,i) => `<div class="mp-card" style="--k:${i}"><small>Level ${i+1}</small><b>${t}</b></div>`).join('')}</div><div class="mp-steps">${steps.map(s => `<span>${s}</span>`).join('')}</div><em class="mp-role"></em>`;
  const cards = [...el.querySelectorAll('.mp-card')], st = [...el.querySelectorAll('.mp-steps span')], role = el.querySelector('.mp-role');
  let i = 0, k = 0;
  function step(){ if (k === 0) { cards.forEach((c,j) => c.classList.toggle('on', j === i % 5)); st.forEach(s => s.classList.remove('on')); role.textContent = ''; }
   if (k >= 1 && k <= 3) st[k-1].classList.add('on');
   if (k === 3) role.textContent = `@${tiers[i % 5].toLowerCase()} role granted`;
   if (++k > 5) { k = 0; i++; } }
  step(); T.push(setInterval(step, 650));
 },
 sponsor(el, T){
  const brands = [['Sample gear brand','Fits: fitness'],['Sample app','Fits: productivity'],['Sample snack co.','Fits: lifestyle'],['Sample tool maker','Fits: DIY']], cols = ['Found','Pitched','Follow-up drafted'];
  el.innerHTML = `<div class="d-head"><span>Sponsor pipeline · sample brands</span><span class="d-live" data-k="st">Searching</span></div><div class="spx">${cols.map(c => `<div class="spx-col"><small>${c}</small></div>`).join('')}</div><div class="spx-draft"><span class="pa-txt"></span><i class="pa-caret"></i></div><button class="ghost" type="button">Run it again</button>`;
  const C = [...el.querySelectorAll('.spx-col')], tx = el.querySelector('.pa-txt'), st = el.querySelector('[data-k="st"]');
  let stage, tick, msg, c;
  function reset(){ el.querySelectorAll('.spx-card').forEach(n => n.remove()); stage = brands.map(() => -1); tick = 0; msg = ''; c = 0; tx.textContent = ''; st.textContent = 'Searching'; }
  function move(i){ const o = el.querySelector(`.spx-card[data-i="${i}"]`); if (o) o.remove(); stage[i]++; const d = document.createElement('div'); d.className = 'spx-card'; d.dataset.i = i; d.innerHTML = `${brands[i][0]}<small>${brands[i][1]}</small>`; C[stage[i]].appendChild(d);
    if (stage[i] === 2){ st.textContent = 'Drafting follow-ups'; msg = `Hi ${brands[i][0]} team, following up on my note from last week. Happy to send audience numbers.`; c = 0; } }
  reset();
  el.querySelector('button').onclick = reset;
  T.push(setInterval(() => { tick++;
    const fresh = stage.indexOf(-1), open = stage.findIndex(s => s >= 0 && s < 2);
    if (fresh >= 0 && (tick % 2 === 1 || open < 0)) move(fresh);
    else if (open >= 0) move(open);
    else { st.textContent = 'Pipeline up to date ✓'; if (tick > 24) reset(); }
  }, 900));
  T.push(setInterval(() => { if (c < msg.length) tx.textContent = msg.slice(0, ++c); }, 28));
 },
 interlude(el, T){
  el.innerHTML = `<div class="d-head"><span>AI wait time · sample sponsor</span><span class="d-live" data-k="st">Generating</span></div>
  <div class="ilx-chat"><span class="ilx-q">Plan a 3-day trip to San Juan</span><span class="ilx-a"><span class="ilx-dots"><i></i><i></i><i></i></span><span data-k="a">Assistant is generating</span></span>
   <div class="ilx-slot"><small><span>Sponsored</span><em data-k="v">Verified display</em></small><b>Sample travel brand</b><span>Sample offer shown during the wait.</span></div></div>
  <div class="da-out" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div><small>Visible seconds</small><b data-k="sec">0.0</b></div><div><small>Advertiser billed</small><b data-k="bill">$0.0000</b></div><div><small>Earner gets 25%</small><b data-k="earn">$0.0000</b></div></div>
  <button class="ghost" type="button" aria-pressed="false">Hide the tab</button>`;
  const g = k => el.querySelector(`[data-k="${k}"]`), slot = el.querySelector('.ilx-slot'), dots = el.querySelector('.ilx-dots'), btn = el.querySelector('button');
  let t = 0, sec = 0, hidden = false;
  btn.onclick = () => { hidden = !hidden; btn.setAttribute('aria-pressed', String(hidden)); btn.textContent = hidden ? 'Show the tab' : 'Hide the tab'; draw(); };
  function draw(){
    const done = t >= 12, bill = sec/60;
    g('sec').textContent = sec.toFixed(1); g('bill').textContent = '$' + bill.toFixed(4); g('earn').textContent = '$' + (bill*.25).toFixed(4);
    g('st').textContent = done ? 'Response ready' : hidden ? 'Tab hidden' : 'Generating';
    g('a').textContent = done ? 'Here is your 3-day plan.' : 'Assistant is generating';
    g('v').textContent = done ? 'Slot closed' : hidden ? 'Hidden · not billing' : 'Verified display';
    dots.hidden = done; slot.classList.toggle('off', done); slot.classList.toggle('paused', hidden && !done);
  }
  draw();
  T.push(setInterval(() => { t += .25; if (t < 12 && !hidden) sec += .25; if (t >= 16){ t = 0; sec = 0; } draw(); }, 250));
 },
 service(el, T){
  const lanes = [['Invoices', ['Inbox', 'Extract', 'Match', 'Pay']], ['Marketing', ['Plan', 'Draft', 'Post', 'Report']], ['Inventory', ['Count', 'Forecast', 'Reorder', 'Log']]];
  const modes = [['One workflow', 1, 'One job, automated and handed back with documentation.'], ['Integrated system', 3, 'Several agents share context across your tools.'], ['Hands-free, managed', 3, 'I run it: weekly reviews, and you approve every change.']];
  el.innerHTML = `<div class="d-head"><span>How much do you hand over?</span><span class="d-live">Sample run</span></div><div class="svx-tabs">${modes.map((m, i) => `<button class="ghost" type="button" data-m="${i}" aria-pressed="${i === 0}">${m[0]}</button>`).join('')}</div><div class="svx-lanes"></div><p class="svx-note"></p>`;
  const lanesEl = el.querySelector('.svx-lanes'), note = el.querySelector('.svx-note'); let m = 0, k = 0;
  function draw(){ lanesEl.innerHTML = lanes.slice(0, modes[m][1]).map((l, j) => `<div class="svx-lane"><b>${l[0]}</b>${l[1].map((n, i) => `<span class="svx-node${i === (k + j) % 4 ? ' on' : ''}">${n}</span>`).join('')}</div>`).join(''); note.textContent = modes[m][2]; }
  el.querySelector('.svx-tabs').onclick = e => { const b = e.target.closest('[data-m]'); if (!b) return; m = +b.dataset.m; el.querySelectorAll('[data-m]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); draw(); };
  draw(); T.push(setInterval(() => { k++; draw(); }, 800));
 }
};

initShow();

/* ---------- 3D: Rivera Tower on the headland at El Morro, San Juan ---------- */
function scene3d(){
if (!window.THREE) { document.documentElement.classList.add('no-gl'); return; }
let renderer;
try { renderer = new THREE.WebGLRenderer({canvas: $('#scene'), antialias: true, powerPreference: 'high-performance'}); }
catch (e) { document.documentElement.classList.add('no-gl'); return; }
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.outputEncoding = THREE.sRGBEncoding; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.25;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x2b3f57, 320, 1600);
const cam = new THREE.PerspectiveCamera(30, 1, 1, 2800);
const dirOf = (az, el) => new THREE.Vector3(-Math.sin(az)*Math.cos(el), Math.sin(el), -Math.cos(az)*Math.cos(el));
const MOON = dirOf(.69, .31), LIGHT = dirOf(.69, .42);
const hemi = new THREE.HemisphereLight(0xa9c0ee, 0x262d3a, .5), fls = []; scene.add(hemi);
const moon = new THREE.DirectionalLight(0xc8d6ff, 2); moon.target.position.set(-45, 0, -30); moon.position.copy(LIGHT).multiplyScalar(280).add(moon.target.position); scene.add(moon, moon.target);
moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048); Object.assign(moon.shadow.camera, {left: -130, right: 130, top: 130, bottom: -130, near: 20, far: 640}); moon.shadow.bias = -.0008; moon.shadow.normalBias = .5;
const fill = new THREE.DirectionalLight(0x93a9d8, .4); fill.position.set(70, 45, 90); scene.add(fill);

const W = 16, D = 11, FH = 3.4, NF = 6, LIFT = 11, IH = FH - .4;
const M = (c, o) => new THREE.MeshStandardMaterial(Object.assign({color: c, roughness: .8, metalness: .05}, o || {}));
const box = (w, h, d, mat, x, y, z, p) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); p.add(m); return m; };
const mats = {slab: M(0xc4cad3), wall: M(0x252c38), top: M(0xe6e0d6, {roughness: .9}), desk: M(0xf1efe9), dark: M(0x2d3440), leaf: M(0x3d8c58), pot: M(0xb86a45), sofa: M(0x3c6f8f), mull: M(0x9aa6b5, {metalness: .6, roughness: .35}),
  glass: new THREE.MeshStandardMaterial({color: 0x9cc4ee, transparent: true, opacity: .13, roughness: .05, metalness: .3, depthWrite: false})};
const tower = new THREE.Group(); scene.add(tower);
const hits = [], groups = [], edges = [], floorBots = [];
const botGeo = new THREE.SphereGeometry(.42, 20, 16), eyeGeo = new THREE.BoxGeometry(.09, .16, .04), ringGeo = new THREE.TorusGeometry(.56, .05, 8, 28), eyeMat = new THREE.MeshBasicMaterial({color: 0xffffff});
const SC = {working: new THREE.Color(0x3ad07a), waiting: new THREE.Color(0xf2b33a), resting: new THREE.Color(0x8c9aac)};

function props(type, g, col){
  const em = new THREE.MeshStandardMaterial({color: 0x111318, emissive: col, emissiveIntensity: .9});
  if (type === 'steel'){ const st = M(0x7f8a99, {metalness: .6, roughness: .4}); for (let k = 0; k < 3; k++) box(4.2, .22, .3, st, -3, .55 + k*.24, 2.2 + k*.06, g); box(.55, .3, .55, M(0xf2a33a), -.4, .56, 2.8, g); }
  if (type === 'charts'){ box(3.6, .1, 1.2, mats.desk, -2.8, 1.1, 2.4, g); box(.2, .7, 1, mats.desk, -2.8, .75, 2.4, g); [.6, 1, .8, 1.3].forEach((h, k) => box(.45, h, .45, em, -4 + k*.8, 1.15 + h/2, 2.4, g)); }
  if (type === 'shelves'){ box(3.8, 2, .6, mats.dark, -3, 1.4, 2.9, g); for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) box(.62, .42, .4, M([0x4f93ee, 0xe6ebf1, 0xd7262f][(r + k) % 3]), -4.35 + k*.9, .75 + r*.6, 2.8, g); }
  if (type === 'studio'){ const ring = new THREE.Mesh(new THREE.TorusGeometry(.62, .08, 10, 32), em); ring.position.set(-4, 2.1, 2.4); ring.rotation.y = Math.PI/4; g.add(ring); box(.08, 1.7, .08, mats.dark, -4, 1.2, 2.4, g); box(2, 1.1, .1, em, -1.6, 1.6, 2.9, g); box(.1, .9, .1, mats.dark, -1.6, .85, 2.9, g); }
  if (type === 'servers'){ for (let k = 0; k < 3; k++){ box(1, 2.3, .9, mats.dark, -4.2 + k*1.3, 1.55, 2.6, g); for (let d = 0; d < 5; d++) box(.7, .05, .02, em, -4.2 + k*1.3, .8 + d*.38, 3.06, g); } }
  if (type === 'board'){ box(4.6, .12, 1.8, mats.desk, -2.6, 1.15, 2.3, g); box(.6, .72, 1.2, mats.desk, -2.6, .76, 2.3, g); for (let k = 0; k < 3; k++){ box(.55, .5, .55, mats.dark, -4.1 + k*1.5, .75, 1.05, g); box(.55, .5, .55, mats.dark, -4.1 + k*1.5, .75, 3.55, g); } }
}
function plant(g, x, z){ const p = new THREE.Mesh(new THREE.CylinderGeometry(.28, .22, .5, 12), mats.pot); p.position.set(x, .65, z); g.add(p); const l = new THREE.Mesh(new THREE.SphereGeometry(.55, 12, 10), mats.leaf); l.position.set(x, 1.3, z); l.scale.y = 1.25; g.add(l); }

FLOORS.forEach((F, i) => {
  if (F.soon) return;
  const g = new THREE.Group(); g.position.y = i*FH; tower.add(g); groups.push(g);
  const col = new THREE.Color(F.color);
  box(W, .4, D, mats.slab, 0, .2, 0, g);
  box(W - .4, .02, D - .4, mats.top, 0, .41, 0, g);
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(5, 3.2), new THREE.MeshStandardMaterial({color: col, roughness: 1, transparent: true, opacity: .4})); rug.rotation.x = -Math.PI/2; rug.position.set(2.6, .43, 1.6); g.add(rug);
  box(W, IH, .25, mats.wall, 0, .4 + IH/2, -D/2 + .125, g);
  box(.25, IH, D, mats.wall, -W/2 + .125, .4 + IH/2, 0, g);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.6), new THREE.MeshBasicMaterial({color: col})); scr.position.set(-1.4, 2.3, -D/2 + .27); g.add(scr);
  const scr2 = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.3), new THREE.MeshBasicMaterial({color: 0x1b2433})); scr2.position.set(-W/2 + .27, 2.2, -1); scr2.rotation.y = Math.PI/2; g.add(scr2);
  box(W, IH, .06, mats.glass, 0, .4 + IH/2, D/2 - .03, g).renderOrder = 2;
  box(.06, IH, D, mats.glass, W/2 - .03, .4 + IH/2, 0, g).renderOrder = 2;
  const nF = 9, nS = 7, im = new THREE.InstancedMesh(new THREE.BoxGeometry(.09, IH, .09), mats.mull, nF + nS), o = new THREE.Object3D(); let k = 0;
  for (let a = 0; a < nF; a++){ o.position.set(-W/2 + a*W/(nF - 1), .4 + IH/2, D/2); o.updateMatrix(); im.setMatrixAt(k++, o.matrix); }
  for (let a = 0; a < nS; a++){ o.position.set(W/2, .4 + IH/2, -D/2 + a*D/(nS - 1)); o.updateMatrix(); im.setMatrixAt(k++, o.matrix); }
  g.add(im);
  const edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W + .05, .42, D + .05)), new THREE.LineBasicMaterial({color: col, transparent: true, opacity: .3})); edge.position.y = .2; g.add(edge); edges.push(edge);
  const monMat = new THREE.MeshStandardMaterial({color: 0x111111, emissive: col, emissiveIntensity: .55}), desks = [];
  for (let d = 0; d < 3; d++){ const x = -W/2 + 2.6 + d*3.6, z = -D/2 + 2.3;
    box(2.2, .12, 1.1, mats.desk, x, 1.18, z, g); box(.16, .74, .9, mats.desk, x - .95, .78, z, g); box(.16, .74, .9, mats.desk, x + .95, .78, z, g);
    box(.95, .58, .06, monMat, x, 1.62, z - .3, g); desks.push(new THREE.Vector3(x, .42, z + 1.05)); }
  desks.push(new THREE.Vector3(-4.6, .42, 4.2));
  box(2.6, .45, .9, mats.sofa, W/2 - 2.4, .65, -D/2 + 1.2, g); box(2.6, .6, .22, mats.sofa, W/2 - 2.4, .95, -D/2 + .8, g);
  const rests = [new THREE.Vector3(.8, .42, 2.8), new THREE.Vector3(4.2, .42, 1.2), new THREE.Vector3(W/2 - 2.4, .62, -D/2 + 1.3), new THREE.Vector3(2.6, .42, 4.3)];
  plant(g, -W/2 + .9, D/2 - .9); plant(g, W/2 - .9, D/2 - .9);
  props(F.prop, g, col);
  const pl = new THREE.PointLight(0xffd9b0, 1.5, 17); pl.position.set(0, FH - .6, 0); g.add(pl); fls.push(pl);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(W, FH, D), new THREE.MeshBasicMaterial({visible: false})); hit.position.y = FH/2; hit.userData.i = i; g.add(hit); hits.push(hit);
  const bodyMat = new THREE.MeshStandardMaterial({color: col, roughness: .4, emissive: col, emissiveIntensity: .2});
  floorBots.push(F.bots.map((b, j) => {
    const bg = new THREE.Group(), body = new THREE.Mesh(botGeo, bodyMat); body.scale.set(1, 1.15, 1); body.position.y = .55; bg.add(body);
    [-.13, .13].forEach(ex => { const e = new THREE.Mesh(eyeGeo, eyeMat); e.position.set(ex, .62, .4); body.add(e); e.position.y = .08; });
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({color: SC[b.st]})); ring.rotation.x = -Math.PI/2; ring.position.y = .05; bg.add(ring);
    bg.rotation.y = Math.PI/4; bg.position.copy(b.st === 'resting' ? rests[j] : desks[j]); g.add(bg);
    return {b, g: bg, body, ring, desk: desks[j], rest: rests[j], ph: Math.random()*6};
  }));
});


/* roof: sign with the logo, the Puerto Rico flag, and a familiar face at the parapet */
const roof = new THREE.Group(); roof.position.y = NF*FH; tower.add(roof); groups.push(roof);
box(W, .5, D, mats.slab, 0, .25, 0, roof);
[[W, .2, 0, D/2 - .1], [W, .2, 0, -D/2 + .1], [.2, D, W/2 - .1, 0], [.2, D, -W/2 + .1, 0]].forEach(([w, d, x, z]) => box(w, .5, d, mats.slab, x, .75, z, roof));
box(3, 1.2, 2.2, mats.dark, -4.2, 1.1, -2.2, roof); box(2, .8, 2, M(0x3a4352), 0, .9, -3, roof);
const canvasOf = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d')); return c; };
const texOf = c => { const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; return t; };
const star = (x, cx, cy, r) => { x.beginPath(); for (let k = 0; k < 10; k++){ const a = -Math.PI/2 + k*Math.PI/5, rr = k % 2 ? r*.42 : r; x.lineTo(cx + Math.cos(a)*rr, cy + Math.sin(a)*rr); } x.fill(); };
const prFlag = canvasOf(300, 200, x => { for (let s = 0; s < 5; s++){ x.fillStyle = s % 2 ? '#ffffff' : '#d7262f'; x.fillRect(0, s*40, 300, 40); } x.fillStyle = '#3f86ea'; x.beginPath(); x.moveTo(0, 0); x.lineTo(173, 100); x.lineTo(0, 200); x.fill(); x.fillStyle = '#fff'; star(x, 58, 100, 30); });
const pole = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 5.4, 8), mats.mull); pole.position.set(W/2 - 1.2, 3.2, -D/2 + 1.2); roof.add(pole);
const flagGeo = new THREE.PlaneGeometry(3.6, 2.4, 18, 8), flagBase = flagGeo.attributes.position.array.slice();
const flag = new THREE.Mesh(flagGeo, new THREE.MeshStandardMaterial({map: texOf(prFlag), side: THREE.DoubleSide, roughness: .7})); flag.position.set(W/2 - 1.2 + 1.8, 4.6, -D/2 + 1.2); roof.add(flag);
const logoImg = new Image(), signC = canvasOf(1024, 128, () => {}), signTex = texOf(signC);
function drawSign(){ const x = signC.getContext('2d'); x.clearRect(0, 0, 1024, 128); x.font = '900 100px "Big Shoulders Display", "Arial Narrow", sans-serif'; x.textBaseline = 'middle'; x.fillStyle = '#eef3fa';
  const has = logoImg.complete && logoImg.naturalWidth > 0, w = Math.min(x.measureText('RIVERA TOWER').width, 820), x0 = (1024 - w - (has ? 150 : 0))/2;
  if (has) x.drawImage(logoImg, x0, 4, 137, 120); x.fillText('RIVERA TOWER', x0 + (has ? 150 : 0), 70, 820); signTex.needsUpdate = true; }
logoImg.onload = drawSign; logoImg.src = LOGO; drawSign(); if (document.fonts) document.fonts.ready.then(drawSign);
const sign = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 1.2), new THREE.MeshBasicMaterial({map: signTex, transparent: true, toneMapped: false})); sign.position.set(-1.6, 1.75, D/2 + .02); roof.add(sign);
{ const sp = new THREE.Sprite(new THREE.SpriteMaterial({map: new THREE.TextureLoader().load(KAS), toneMapped: false})); sp.scale.set(2.5, 1.62, 1); sp.position.set(5.6, 1.8, D/2 - .5); roof.add(sp); }

/* elevator */
const shaft = box(2.2, NF*FH + .6, 2.2, mats.glass, W/2 + 1.25, (NF*FH + .6)/2, D/2 - 1.6, scene); shaft.renderOrder = 2;
const cab = box(1.8, 2.5, 1.8, new THREE.MeshStandardMaterial({color: 0x2d3440, emissive: 0xffd9a0, emissiveIntensity: .35}), W/2 + 1.25, 1.7, D/2 - 1.6, scene);


tower.traverse(o => { if (o.isMesh && o.material.visible && !o.material.transparent) o.castShadow = true; });

/* photographs (Poly Haven, CC0) replace the painted textures once they load */
const soft = (() => { try { const g = renderer.getContext(), x = g.getExtension('WEBGL_debug_renderer_info'); return /swiftshader|basic render|llvmpipe|software/i.test(String(x ? g.getParameter(x.UNMASKED_RENDERER_WEBGL) : g.getParameter(g.RENDERER))); } catch (e) { return false; } })();
const liteAtLoad = document.documentElement.classList.contains('m') || soft, TL = new THREE.TextureLoader(), ANI = Math.min(8, renderer.capabilities.getMaxAnisotropy());
const photo = (file, rep, srgb, done) => TL.load('/assets/' + file, t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); t.anisotropy = ANI; if (srgb) t.encoding = THREE.sRGBEncoding; done(t); settle = 4; });
const skin = (m, file, rep, tint, nfile) => { photo(file, rep, true, t => { m.map = t; m.color.set(tint).convertSRGBToLinear(); m.needsUpdate = true; }); if (nfile && !liteAtLoad) photo(nfile, rep, false, t => { m.normalMap = t; m.needsUpdate = true; }); };
const uvWorld = (o, w, h, d) => { const uv = o.geometry.attributes.uv, f = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]]; for (let i = 0; i < 24; i++) uv.setXY(i, uv.getX(i)*f[i >> 2][0], uv.getY(i)*f[i >> 2][1]); return o; };
const batter = (o, inset) => { const p = o.geometry.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) > 0){ p.setX(i, p.getX(i) - Math.sign(p.getX(i))*inset); p.setZ(i, p.getZ(i) - Math.sign(p.getZ(i))*inset); } o.geometry.computeVertexNormals(); return o; };

/* ---------- the island: headland, El Morro, sea and sky ---------- */
const noiseTex = (base, spots, n, rep) => { const t = texOf(canvasOf(256, 256, x => { x.fillStyle = base; x.fillRect(0, 0, 256, 256); for (let i = 0; i < n; i++){ x.fillStyle = spots[i % spots.length]; x.globalAlpha = .06 + Math.random()*.2; const s = 2 + Math.random()*12; x.fillRect(Math.random()*256, Math.random()*256, s*(1 + Math.random()*3), s*.6); } })); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); return t; };
const isle = new THREE.Group(); isle.rotation.y = 1.0; scene.add(isle);
{ const pts = [[-76,-360],[-80,-120],[-70,-20],[-60,40],[-54,88],[-46,120],[-30,146],[0,156],[30,146],[48,120],[58,82],[66,30],[76,-40],[86,-140],[84,-360]].map(p => new THREE.Vector2(p[0], p[1]));
  const sh = new THREE.Shape(); sh.moveTo(pts[0].x, pts[0].y); sh.splineThru(pts.slice(1));
  const g = new THREE.ExtrudeGeometry(sh, {depth: 14, bevelEnabled: true, bevelThickness: 1.2, bevelSize: 1.8, bevelSegments: 2, curveSegments: 48}); g.rotateX(-Math.PI/2); g.translate(0, -15.2, 0);
  const land = new THREE.Mesh(g, [M(0x93a091, {roughness: 1, map: noiseTex('#3d6443', ['#2c4d33', '#5b8a5c', '#35593b', '#4a7a4e'], 1100, .03)}), M(0x7d735f, {roughness: 1})]); land.receiveShadow = true; isle.add(land); skin(land.material[0], 'grass.jpg', .1, 0x7fae72); skin(land.material[1], 'rock.jpg', .05, 0x9c958b);
  const path = box(3.4, .08, 88, M(0xb3a88f, {roughness: 1}), 0, .04, -54, isle); path.receiveShadow = true; }
{ const plaza = box(42, .12, 36, M(0x8f98a6, {roughness: .9, map: noiseTex('#566170', ['#465160', '#74808f', '#3b4552'], 1500, .16)}), 0, .06, 0, scene); plaza.receiveShadow = true; uvWorld(plaza, 42, .12, 36); skin(plaza.material, 'cobble.jpg', .16, 0x9aa7ba, 'cobble-n.jpg'); }

/* El Morro: stepped stone walls, garitas, the lighthouse and its three flags */
const morro = new THREE.Group(); morro.position.set(0, 0, -98); isle.add(morro);
const stone = M(0xd9c7a4, {roughness: 1, map: noiseTex('#c4ad86', ['#a38d69', '#d9c7a2', '#8d785a', '#b59e79'], 1700, .1)}), stoneD = M(0x97856a, {roughness: 1});
skin(stone, 'stone.jpg', .16, 0xeadcc0, 'stone-n.jpg');
const mb = (w, h, d, x, y, z, m) => { const o = uvWorld(box(w, h, d, m || stone, x, y, z, morro), w, h, d); o.castShadow = o.receiveShadow = true; return o; };
batter(mb(84, 5, 46, 0, 2.5, -25), 1.5); batter(mb(78, 8.5, 4, 0, 4.25, 0), .5);
[-39, 39].forEach(x => { batter(mb(11, 8.5, 11, x, 4.25, 1), .7).rotation.y = Math.PI/4; });
mb(4.4, 5, .4, 0, 2.5, 2.1, M(0x1a1612));
batter(mb(64, 11.5, 30, 0, 5.75, -21), 1.2); batter(mb(42, 15.5, 18, 3, 7.75, -27), .9);
batter(mb(54, 13, 20, 0, -8, -54), 1.6); batter(mb(36, 8, 14, 0, -11.5, -68), 1.2);
mb(3.8, 8.5, 3.8, 10, 19.75, -29, M(0x596070)); mb(4.5, .5, 4.5, 10, 24.2, -29, M(0xdfe3e8));
const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.7, 8), new THREE.MeshBasicMaterial({color: 0xffe6a8})); lamp.position.set(10, 25.3, -29); morro.add(lamp);
{ const cap = new THREE.Mesh(new THREE.ConeGeometry(1.5, 1.3, 8), M(0x3a3f4a)); cap.position.set(10, 26.8, -29); morro.add(cap); }
[[-46.5, 8.5, 1], [46.5, 8.5, 1], [-32, 11.5, -6], [32, 11.5, -6], [-27, -1.5, -63.5], [27, -1.5, -63.5], [-18, -7.5, -74.5], [18, -7.5, -74.5], [-18, 15.5, -18.5]].forEach(([x, y, z]) => {
  const c = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2.3, 10), stone); c.position.set(x, y + 1.15, z);
  const d = new THREE.Mesh(new THREE.SphereGeometry(1.08, 10, 6, 0, 6.283, 0, 1.571), stoneD); d.position.set(x, y + 2.3, z); c.castShadow = d.castShadow = true; morro.add(c, d); });
{ const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1.7, 1, .9), stone, 46), o = new THREE.Object3D(); let n = 0;
  for (let i = 0; i < 26; i++){ o.position.set(-37.5 + i*3, 9, 1.5); o.updateMatrix(); im.setMatrixAt(n++, o.matrix); }
  for (let i = 0; i < 20; i++){ o.position.set(-30.4 + i*3.2, 12, -6.4); o.updateMatrix(); im.setMatrixAt(n++, o.matrix); }
  im.castShadow = true; morro.add(im); }
[[canvasOf(150, 100, x => { for (let s = 0; s < 13; s++){ x.fillStyle = s % 2 ? '#fff' : '#b22234'; x.fillRect(0, s*100/13, 150, 100/13 + 1); } x.fillStyle = '#3c3b6e'; x.fillRect(0, 0, 60, 54); }), -9], [prFlag, -4.5],
 [canvasOf(150, 100, x => { x.fillStyle = '#fff'; x.fillRect(0, 0, 150, 100); x.strokeStyle = '#c8102e'; x.lineWidth = 12; x.beginPath(); x.moveTo(0, 0); x.lineTo(150, 100); x.moveTo(150, 0); x.lineTo(0, 100); x.stroke(); }), 0]].forEach(([cv, x]) => {
  const p = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, 6, 6), mats.mull); p.position.set(x, 18.5, -20);
  const f = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 1.8), new THREE.MeshStandardMaterial({map: texOf(cv), side: THREE.DoubleSide, roughness: .8})); f.position.set(x + 1.4, 20.5, -20); morro.add(p, f); });
[-24, 24].forEach(x => { const l = new THREE.PointLight(0xffc98a, 2.6, 100, 2); l.position.set(x, 3, 15); morro.add(l); });

/* lamps along the path, and palms around the plaza */
const glowTex = texOf(canvasOf(64, 64, x => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,226,172,1)'); g.addColorStop(.25, 'rgba(255,200,130,.5)'); g.addColorStop(1, 'rgba(255,200,130,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); }));
{ const lp = []; for (let i = 0; i < 7; i++) [-3.4, 3.4].forEach(x => { const z = -16 - i*12; lp.push(x, 3.1, z); box(.12, 3, .12, mats.dark, x, 1.5, z, isle); });
  isle.add(new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(lp, 3)), new THREE.PointsMaterial({size: 7, map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending}))); }
const beacon = new THREE.Sprite(new THREE.SpriteMaterial({map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false})); beacon.scale.set(16, 16, 1); beacon.position.copy(lamp.position); morro.add(beacon);
{ const P = [[-15, 9], [-17, -3], [24, 2], [17, -7], [-20, 16], [-6, 22], [-19, -12], [27, -8], [4, -15], [-9, -14], [24, -14], [-25, 2]], o = new THREE.Object3D(); o.rotation.order = 'YXZ';
  const fg = new THREE.PlaneGeometry(1.2, 4.4, 1, 5); fg.translate(0, 2.2, 0); { const p = fg.attributes.position; for (let i = 0; i < p.count; i++){ const y = p.getY(i); p.setX(i, p.getX(i)*(1 - y/4.9)); p.setZ(i, -y*y*.125); } } fg.computeVertexNormals();
  const tr = new THREE.InstancedMesh(new THREE.CylinderGeometry(.15, .27, 7, 7), M(0x6f5d49, {roughness: 1}), P.length), fr = new THREE.InstancedMesh(fg, M(0x3f8050, {roughness: .9, side: THREE.DoubleSide}), P.length*11);
  P.forEach(([x, z], i) => { const h = 6 + (i % 3)*.9, lean = (i % 2 ? 1 : -1)*.07;
    o.position.set(x, h/2, z); o.rotation.set(lean, 0, lean*.7); o.scale.set(1, h/7, 1); o.updateMatrix(); tr.setMatrixAt(i, o.matrix); o.scale.set(1, 1, 1);
    for (let k = 0; k < 11; k++){ o.position.set(x + lean*h*.35, h - .1, z + lean*h*.5); o.rotation.set(.7 + (k % 3)*.28, k/11*6.283 + i, 0); o.updateMatrix(); fr.setMatrixAt(i*11 + k, o.matrix); } });
  tr.castShadow = fr.castShadow = true; scene.add(tr, fr); }

/* sea: scrolling photographic wave normals, a fresnel reflection of the sky, and the moon path */
const flatN = new THREE.DataTexture(new Uint8Array([128, 128, 255, 255]), 1, 1, THREE.RGBAFormat); flatN.needsUpdate = true;
const sea = new THREE.Mesh(new THREE.PlaneGeometry(5600, 5600), new THREE.ShaderMaterial({uniforms: {t: {value: 0}, eye: {value: cam.position}, moonDir: {value: MOON}, nm: {value: flatN}, lo: {value: 0}},
  vertexShader: 'varying vec3 wp; void main(){ vec4 w = modelMatrix*vec4(position, 1.); wp = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
  fragmentShader: `uniform float t, lo; uniform vec3 eye, moonDir; uniform sampler2D nm; varying vec3 wp;
   vec4 waves(vec2 uv){ vec4 a = texture2D(nm, uv/103. + vec2(t/17., t/29.)); if (lo > .5) return a*2. - 1.; return (a + texture2D(nm, uv/107. - vec2(t/-19., t/31.)) + texture2D(nm, uv/vec2(8907., 9803.) + vec2(t/101., t/97.)) + texture2D(nm, uv/vec2(1091., 1027.) - vec2(t/109., t/-113.)))*.5 - 1.; }
   void main(){ float d = length(eye - wp), k = 1.5/(1. + d*.0035);
    vec3 n = normalize(waves(wp.xz*2.2).xzy*vec3(k, 1., k)), v = normalize(eye - wp), r = reflect(-v, n); r.y = abs(r.y);
    float fr = .03 + .97*pow(1. - max(dot(n, v), 0.), 5.), m = max(dot(r, moonDir), 0.);
    vec3 sky = mix(vec3(.19, .27, .37), vec3(.045, .1, .24), smoothstep(0., .45, r.y)) + vec3(.45, .55, .72)*pow(m, 10.)*.4;
    vec3 c = mix(vec3(.006, .024, .05), sky, fr) + vec3(.95, .97, 1.)*pow(m, 420.)*2.4;
    gl_FragColor = vec4(mix(c, vec3(.17, .25, .35), smoothstep(600., 2200., d)), 1.); }`}));
sea.rotation.x = -Math.PI/2; sea.position.y = -13.5; scene.add(sea);
photo('water-n.jpg', 1, false, t => { sea.material.uniforms.nm.value = t; });

/* sky: a real night-sky panorama. A 4K window covers everything the camera can see; a lighter full sphere fills the rest and lights the scene */
const skyG = new THREE.Group(); scene.add(skyG);
{ const UL = .25 - 2.05/(2*Math.PI), UR = .25 + .45/(2*Math.PI), sm = () => new THREE.MeshBasicMaterial({color: 0x0d1930, side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false});
  const far = new THREE.Mesh(new THREE.SphereGeometry(2150, 48, 24), sm()), near = new THREE.Mesh(new THREE.SphereGeometry(2050, 64, 20, (1 - UR)*2*Math.PI, (UR - UL)*2*Math.PI, 50/180*Math.PI, 44/180*Math.PI), sm());
  near.visible = false; far.renderOrder = -2; near.renderOrder = -1; skyG.add(far, near);
  const use = (mesh, t) => { t.encoding = THREE.sRGBEncoding; t.wrapS = THREE.RepeatWrapping; t.repeat.x = -1; mesh.material.map = t; mesh.material.color.set(0xffffff); mesh.material.needsUpdate = true; mesh.visible = true; };
  TL.load('/assets/sky-env.jpg', t => { use(far, t); const e = t.clone(); e.repeat.x = 1; e.needsUpdate = true; if (!soft){ const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromEquirectangular(e).texture; pm.dispose(); } e.dispose(); settle = 4; });
  TL.load('/assets/sky-4k.jpg', t => { t.anisotropy = ANI; use(near, t); }); }

/* colors above are written in sRGB: convert once for the linear pipeline */
{ const seen = new Set(); scene.traverse(o => { if (o.isLight) o.color.convertSRGBToLinear();
    (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { if (!m || seen.has(m) || m.isShaderMaterial) return; seen.add(m); if (m.color) m.color.convertSRGBToLinear(); if (m.emissive) m.emissive.convertSRGBToLinear(); if (m.map) m.map.encoding = THREE.sRGBEncoding; }); });
  Object.values(SC).forEach(c => c.convertSRGBToLinear()); scene.fog.color.convertSRGBToLinear(); }

/* tags */
const tagsEl = $('#tags');
const ftags = FLOORS.map((F, i) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'ftag'; b.tabIndex = -1; b.setAttribute('aria-hidden', 'true'); b.style.setProperty('--c', F.color); b.innerHTML = `<b>${num(i)}</b>${F.name}`; b.onclick = () => select(sel === i ? null : i); tagsEl.appendChild(b); return b; });
const btags = [0, 1, 2, 3].map(() => { const s = document.createElement('span'); s.className = 'btag'; s.hidden = true; tagsEl.appendChild(s); return s; });

/* camera rig: a wide shot of the headland on the landing, then in to the tower */
const stage = $('#stage'), hero = $('#tower'), canvas = renderer.domElement, ray = new THREE.Raycaster(), ptr = new THREE.Vector2(-9, -9), tmp = new THREE.Vector3(), tgt = new THREE.Vector3();
const lerp = (a, b, t) => a + (b - a)*t, clamp = v => Math.max(0, Math.min(1, v)), TAN = Math.tan(15*Math.PI/180);
let lite = false, q = soft ? 2 : 0, warm = 2, lastT = 0, PW = 1200, prCap = 2, ppu = 25, hover = -1, ptrDirty = false, mx = 0, my = 0, tmx = 0, tmy = 0, zoom = 1, ty = NF*FH/2 + 1.2, elv = .2, L = 1, settle = 4;
const lifts = new Array(NF + 1).fill(0);
function measure(){ lite = document.documentElement.classList.contains('m'); PW = hero.clientWidth; prCap = [2, 1, .75, .5][q]; renderer.setPixelRatio(Math.min(devicePixelRatio, lite ? 1.5 : 2, prCap)); moon.castShadow = !lite && q < 2; sea.material.uniforms.lo.value = q > 1 ? 1 : 0; fls.forEach(l => { l.visible = q < 2; }); hemi.intensity = q > 1 ? .64 : .5; document.documentElement.classList.toggle('eco', q > 1);
  const r = stage.getBoundingClientRect(); renderer.setSize(innerWidth, innerHeight, false); ppu = Math.max(8, Math.min(r.height*.82/(NF*FH + 8), (r.width - (PW > 640 ? 150 : 120))/24)); settle = 4; }
addEventListener('resize', measure); measure();
addEventListener('pointermove', e => { tmx = e.clientX/innerWidth - .5; tmy = e.clientY/innerHeight - .5; ptr.set(e.clientX/innerWidth*2 - 1, -(e.clientY/innerHeight)*2 + 1); ptrDirty = true; }, {passive: true});
canvas.addEventListener('click', () => { if (hover >= 0) select(sel === hover ? null : hover); });
canvas.addEventListener('pointerleave', () => { hover = -1; canvas.style.cursor = ''; });
window.__tower = { get q(){ return q; }, sync(){ floorBots.forEach(fb => fb.forEach(o => o.ring.material.color.copy(SC[o.b.st]))); } };
window.__tower.sync();

const clock = new THREE.Clock(); let fN = 0, fT = 0;
function project(v){ tmp.copy(v).project(cam); return [(tmp.x + 1)/2*innerWidth, (1 - tmp.y)/2*innerHeight]; }
function frame(){
  if (document.documentElement.classList.contains('rd')) return;
  const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime, k = R ? 1 : 1 - Math.pow(.0015, dt);
  /* quality steps down (never up) while frames stay slow: 2x -> 1x -> .75x without shadows -> .5x */
  const now = performance.now(), raw = now - lastT; lastT = now;
  if (raw < 1000 && !document.hidden){ fT += raw; if (++fN >= 30 || fT > 1500){ const avg = fT/fN; fN = fT = 0; if (warm) warm--; else if (avg > (q === 2 ? 80 : 42) && q < 3){ q++; warm = 1; measure(); } } }
  let moving = false;
  for (let i = 0; i <= NF; i++){ const to = sel !== null && i > sel ? LIFT : 0; if (Math.abs(to - lifts[i]) > .004) moving = true; lifts[i] += (to - lifts[i])*k; groups[i].position.y = i*FH + lifts[i]; }
  if (moving) settle = 3; renderer.shadowMap.needsUpdate = settle > 0; if (settle > 0) settle--;
  edges.forEach((e, i) => { const want = i === sel ? 1 : i === hover ? .8 : .3; e.material.opacity += (want - e.material.opacity)*k; });
  cab.position.y += (((sel === null ? 0 : sel)*FH + 1.7) - cab.position.y)*k*.6;
  floorBots.forEach(fb => fb.forEach(o => { const to = o.b.st === 'resting' ? o.rest : o.desk; o.g.position.x += (to.x - o.g.position.x)*k*.5; o.g.position.z += (to.z - o.g.position.z)*k*.5; o.g.position.y = to.y;
    if (!R){ const sp = o.b.st === 'working' ? 6 : o.b.st === 'waiting' ? 3 : 1.2; o.body.position.y = .55 + Math.abs(Math.sin(t*sp + o.ph))*(o.b.st === 'resting' ? .03 : .12); o.body.scale.y = o.b.st === 'resting' ? .95 : 1.15; const pul = o.b.st === 'waiting' ? 1 + Math.sin(t*6)*.15 : 1; o.ring.scale.set(pul, pul, pul); } }));
  /* rig */
  const sr = stage.getBoundingClientRect(), hr = hero.getBoundingClientRect(), Wd = innerWidth, Hh = innerHeight, wide = PW > 980;
  L += (clamp(hr.top/(Hh*.7)) - L)*(R ? 1 : Math.min(1, k*1.6));
  const e = L*L*(3 - 2*L), away = clamp(-hr.top/(hr.height*.6));
  let sx = sr.left + sr.width/2 + (PW > 640 ? 64 : 48), sy = Math.max(Hh*(wide ? .52 : .3), Math.min(Hh*.78, sr.top + sr.height/2));
  if (wide) sx += (Wd*.7 - sx)*away;
  const docP = clamp(scrollY/Math.max(1, document.documentElement.scrollHeight - Hh)), sway = R ? 0 : Math.sin(t*.12)*.04;
  mx += (tmx - mx)*.05; my += (tmy - my)*.05;
  elv += ((sel === null ? .2 : .5) - elv)*k*.7; ty += ((sel === null ? NF*FH/2 + 1.2 : sel*FH + FH*.55) - ty)*k*.7; zoom += ((sel === null ? 1 : 1.3) - zoom)*k*.7;
  const az = lerp(.88 + docP*.3 + sway + mx*.1, .62 + sway*.5 + mx*.04, e), el = lerp(elv - my*.05, .075 - my*.015, e);
  const dist = lerp(Hh/(2*ppu*zoom*TAN), wide ? 168 : 255, e);
  tgt.set(lerp(0, -30, e), lerp(ty, 11, e), lerp(0, -22, e));
  const cx = lerp(sx, Wd*(wide ? .62 : .5), e), cy = lerp(sy, Hh*(wide ? .69 : .74), e);
  cam.position.set(tgt.x + Math.sin(az)*Math.cos(el)*dist, tgt.y + Math.sin(el)*dist, tgt.z + Math.cos(az)*Math.cos(el)*dist); cam.lookAt(tgt);
  cam.aspect = Wd/Hh; cam.fov = lerp(30, 40, e); cam.setViewOffset(Wd, Hh, Wd/2 - cx, Hh/2 - cy, Wd, Hh);
  skyG.position.copy(cam.position); sea.material.uniforms.t.value = R ? 0 : t;
  if (!R){ const fa = flagGeo.attributes.position.array; for (let n = 0; n < fa.length; n += 3){ const x = flagBase[n] + 1.8; fa[n + 2] = Math.sin(x*2.2 - t*3.2)*.22*x/3.6; } flagGeo.attributes.position.needsUpdate = true;
    beacon.material.opacity = .35 + .65*Math.pow(.5 + .5*Math.sin(t*1.1), 6); }
  if (ptrDirty){ ptrDirty = false; ray.setFromCamera(ptr, cam); const h = ray.intersectObjects(hits)[0], nh = h && e < .05 && away < .3 ? h.object.userData.i : -1; if (nh !== hover){ hover = nh; canvas.style.cursor = hover >= 0 ? 'pointer' : ''; } }
  if (!((lite || q > 1) && hr.bottom < -20)) renderer.render(scene, cam);
  const off = e > .08 || away > .55; tagsEl.classList.toggle('off', off);
  if (!off){
    ftags.forEach((b, i) => { const [x, y] = project(tmp.set(-W/2, i*FH + lifts[i] + FH*.55, D/2)); b.style.transform = `translate(${x - 12}px,${y}px) translate(-100%,-50%)`; b.classList.toggle('on', i === sel || i === hover); });
    btags.forEach((s, j) => { const o = sel === null ? null : floorBots[sel][j]; if (!o){ s.hidden = true; return; } o.g.getWorldPosition(tmp); tmp.y += 1.6 + (j % 2)*.8; const [x, y] = project(tmp); s.hidden = false; s.innerHTML = `<i class="dot ${o.b.st}"></i>${o.b.n}`; s.style.transform = `translate(${x}px,${y}px) translate(-50%,-100%)`; });
  }
}
/* fail safe: a lost graphics context pauses the scene until the browser restores it; repeated frame errors switch the 3D off for good */
let fails = 0, dead = false, lost = false, lostT = 0;
function glOff(){ dead = true; canvas.style.display = 'none'; tagsEl.hidden = true; document.documentElement.classList.add('no-gl'); }
canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; clearTimeout(lostT); lostT = setTimeout(() => { if (lost) glOff(); }, 8000); });
canvas.addEventListener('webglcontextrestored', () => { clearTimeout(lostT); if (dead) return; lost = false; fails = 0; settle = 4; measure(); });
function loop(){
  if (dead) return;
  if (!lost){ try { frame(); fails = 0; } catch (err) { if (++fails > 5){ glOff(); return; } } }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
}
try { scene3d(); } catch (err) { document.documentElement.classList.add('no-gl'); const c = $('#scene'); if (c) c.style.display = 'none'; }
})();
