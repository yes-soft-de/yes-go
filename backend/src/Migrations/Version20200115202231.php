<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200115202231 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE comment_entity (id INT AUTO_INCREMENT NOT NULL, customer_id INT NOT NULL, employee_id INT NOT NULL, body VARCHAR(255) NOT NULL, date DATETIME DEFAULT NULL, details VARCHAR(255) DEFAULT NULL, INDEX IDX_C43B1C7A9395C3F3 (customer_id), INDEX IDX_C43B1C7A8C03F15C (employee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer_entity (id INT AUTO_INCREMENT NOT NULL, client_name VARCHAR(45) DEFAULT NULL, company_name VARCHAR(45) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, phone VARCHAR(25) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE employee_entity (id INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(45) NOT NULL, position VARCHAR(45) NOT NULL, language VARCHAR(65) NOT NULL, image VARCHAR(255) NOT NULL, experiances VARCHAR(255) DEFAULT NULL, details VARCHAR(255) DEFAULT NULL, is_avaliable INT DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, twitter VARCHAR(255) DEFAULT NULL, linkedin VARCHAR(255) DEFAULT NULL, gmail VARCHAR(255) DEFAULT NULL, birth_date DATE DEFAULT NULL, joining_date DATE DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_employee_entity (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, employee_id INT NOT NULL, details VARCHAR(255) DEFAULT NULL, INDEX IDX_1F28F50D166D1F9C (project_id), INDEX IDX_1F28F50D8C03F15C (employee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_entity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(65) NOT NULL, link VARCHAR(255) NOT NULL, published_date DATE DEFAULT NULL, working_period VARCHAR(45) DEFAULT NULL, details VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service_employee_entity (id INT AUTO_INCREMENT NOT NULL, service_id INT NOT NULL, employee_id INT NOT NULL, details VARCHAR(255) DEFAULT NULL, INDEX IDX_518F019ED5CA9E6 (service_id), INDEX IDX_518F0198C03F15C (employee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE services_entity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price_for_one_hour NUMERIC(2, 2) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skill_entity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, details VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_entity (id INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(45) DEFAULT NULL, user_name VARCHAR(45) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(45) NOT NULL, phone VARCHAR(25) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comment_entity ADD CONSTRAINT FK_C43B1C7A9395C3F3 FOREIGN KEY (customer_id) REFERENCES customer_entity (id)');
        $this->addSql('ALTER TABLE comment_entity ADD CONSTRAINT FK_C43B1C7A8C03F15C FOREIGN KEY (employee_id) REFERENCES employee_entity (id)');
        $this->addSql('ALTER TABLE project_employee_entity ADD CONSTRAINT FK_1F28F50D166D1F9C FOREIGN KEY (project_id) REFERENCES project_entity (id)');
        $this->addSql('ALTER TABLE project_employee_entity ADD CONSTRAINT FK_1F28F50D8C03F15C FOREIGN KEY (employee_id) REFERENCES employee_entity (id)');
        $this->addSql('ALTER TABLE service_employee_entity ADD CONSTRAINT FK_518F019ED5CA9E6 FOREIGN KEY (service_id) REFERENCES services_entity (id)');
        $this->addSql('ALTER TABLE service_employee_entity ADD CONSTRAINT FK_518F0198C03F15C FOREIGN KEY (employee_id) REFERENCES employee_entity (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_entity DROP FOREIGN KEY FK_C43B1C7A9395C3F3');
        $this->addSql('ALTER TABLE comment_entity DROP FOREIGN KEY FK_C43B1C7A8C03F15C');
        $this->addSql('ALTER TABLE project_employee_entity DROP FOREIGN KEY FK_1F28F50D8C03F15C');
        $this->addSql('ALTER TABLE service_employee_entity DROP FOREIGN KEY FK_518F0198C03F15C');
        $this->addSql('ALTER TABLE project_employee_entity DROP FOREIGN KEY FK_1F28F50D166D1F9C');
        $this->addSql('ALTER TABLE service_employee_entity DROP FOREIGN KEY FK_518F019ED5CA9E6');
        $this->addSql('DROP TABLE comment_entity');
        $this->addSql('DROP TABLE customer_entity');
        $this->addSql('DROP TABLE employee_entity');
        $this->addSql('DROP TABLE project_employee_entity');
        $this->addSql('DROP TABLE project_entity');
        $this->addSql('DROP TABLE service_employee_entity');
        $this->addSql('DROP TABLE services_entity');
        $this->addSql('DROP TABLE skill_entity');
        $this->addSql('DROP TABLE user_entity');
    }
}
