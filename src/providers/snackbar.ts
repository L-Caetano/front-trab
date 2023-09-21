import {MatSnackBar} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
@Injectable()
export class Snackbar {
  constructor(public snackBar: MatSnackBar) {
  }

  open(mensagem: string, tipo: string) {
    this.snackBar.open(mensagem, "", {panelClass: [tipo], duration: 2000});
  }

  openLong(mensagem: string, tipo: string) {
    this.snackBar.open(mensagem, "", {panelClass: [tipo], duration: 5000});
  }


  openCustom(mensagem: string, tipo: string, horizontal, vertical, duration) {
    this.snackBar.open(mensagem, '', {
      duration: duration,
      panelClass: [tipo],
      horizontalPosition: horizontal,
      verticalPosition: vertical,
    });
  }
}
